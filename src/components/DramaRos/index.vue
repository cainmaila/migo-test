<template>
  <div id="DramaRos">
    <DramaRosHeader />
    <SeriesLists
      v-for="data in filterList"
      :key="data.title_id"
      :seriesData="data"
      v-bind="$attrs"
      @collapse="onCollapse"
      @minus="onMinus"
    />
  </div>
</template>
<script>
import DramaRosHeader from './DramaRosHeader.vue'
import SeasonRow from './SeasonRow.vue'
import EpisodeRow from './EpisodeRow.vue'
import SeriesLists from './SeriesLists.vue'
import Lazy from 'lazy.js'
export default {
  name: 'DramaRos',
  components: { DramaRosHeader, SeasonRow, EpisodeRow, SeriesLists },
  props: ['list', 'searchText'],
  data() {
    return {}
  },
  computed: {
    filterList() {
      return Lazy(this.list)
        .filter(({ isFilter }) => {
          return isFilter
        })
        .toArray()
    },
  },
  watch: {
    list(val) {
      val && settingSeriesCollapseType(val)
    },
    searchText(val) {
      _filter(val, this.list || [])
    },
  },
  methods: {
    onCollapse(_series) {
      _series.collapseType = _series.collapseType === 1 ? 2 : 1
    },
    onMinus({ season, series }) {
      season.minusBoxType = season.minusBoxType ? 0 : 2
    },
  },
}

function _filter(val, list) {
  list.forEach((series) => {
    series.isFilter = val ? series.title_name.search(val) !== -1 : true
    if (series.isFilter) {
      series.seasons.forEach((season) => {
        season.isFilter = true
        _episodeAllisFilter(season.episodes)
      })
    } else {
      series.seasons.forEach((season) => {
        season.isFilter = season.season_name.search(val) !== -1
        season.isFilter && (series.isFilter = true)
        if (season.isFilter) {
          _episodeAllisFilter(season.episodes)
        } else {
          season.episodes.forEach((episode) => {
            episode.isFilter = episode.episode_name.search(val) !== -1
            if (episode.isFilter) {
              season.isFilter = true
              series.isFilter = true
            }
          })
        }
      })
    }
  })
}

function _episodeAllisFilter(episodes) {
  episodes.forEach((episode) => {
    episode.isFilter = true
  })
}

//整理樹狀態================================================================
function settingSeriesCollapseType(_series) {
  _series.forEach((_item) => {
    _item.content_type === 'Movie'
      ? (_item.collapseType = 0)
      : (_item.collapseType = 1)
    settingSeasonLinBoxType(_item)
  })
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
</script>
<style scoped>
#DramaRos {
  display: table;
  width: 100%;
  border: 1px solid #c3c3c2;
  border-radius: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}
</style>
