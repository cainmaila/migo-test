<script async setup>
import { ref, watch, onMounted, reactive } from 'vue'
import MigoHandler from '../components/MigoHeader/index.vue'
import DramaRos from '../components/DramaRos/index.vue'
import Search from '../components/Search.vue'

const store = reactive({ searchText: null, series: [] })

import Lazy from 'lazy.js'
watch(
  () => store.searchText,
  (val) => {
    console.log('searchText!!', val)
    store.series = Lazy(seriesRef.value || [])
      .filter(({ content_type }) => {
        return content_type === 'Series'
      })
      .toArray()
    // store.series = seriesRef.value
  },
)

watch(
  () => store.series,
  (val) => {
    console.log('seriesList!', val)
  },
)

import axios from 'axios'
const seriesRef = ref()
onMounted(async () => {
  const { data } = await axios.get('./titles.json')
  seriesRef.value = data
  settingSeriesCollapseType(data)
  store.searchText = ''
})

function settingSeriesCollapseType(_series) {
  _series.forEach((_item) => {
    _item.content_type === 'Movie'
      ? (_item.collapseType = 0)
      : (_item.collapseType = 1)
    settingSeasonLinBoxType(_item)
  })
}

function onCollapse(_series) {
  _series.collapseType = _series.collapseType === 1 ? 2 : 1
}

function settingSeasonLinBoxType(_series) {
  let _lsatItem
  _series.seasons.forEach((_item) => {
    _lsatItem = _item
    _lsatItem.lineBoxType = 1
    settingEpisodeLinBoxType(_item, 1)
  })
  _lsatItem && (_lsatItem.lineBoxType = 2)
  _lsatItem && settingEpisodeLinBoxType(_lsatItem, 0)
}

function settingEpisodeLinBoxType(_seasons, type) {
  let _lsatItem
  _seasons.episodes.forEach((_item) => {
    _lsatItem = _item
    _lsatItem.lineBox2Type = type
    _lsatItem.lineBoxType = 1
  })
  _lsatItem && (_lsatItem.lineBoxType = 2)
}

function onMinus({ season, series }) {
  season.minusBoxType = season.minusBoxType ? 0 : 2
}
</script>

<template>
  <MigoHandler />
  <div class="page-content">
    <h1>Inventory Manager</h1>
    <Search v-model:inputText="store.searchText" />
    <DramaRos :list="store.series" @collapse="onCollapse" @minus="onMinus" />
  </div>
</template>

<style scoped>
h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
}
.page-content {
  padding: 16px 24px;
  margin-top: 64px;
}
</style>
