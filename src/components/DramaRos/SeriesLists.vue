<template>
  <SeriesRow :data="seriesData" :key="seriesData.title_id" v-bind="$attrs" />
  <template v-if="seriesData.collapseType === 2">
    <template
      v-for="season in settingSeasonLinBoxType(filterList(seasons))"
      :key="season.season_id"
    >
      <SeasonRow
        :seasonData="season"
        @minus="onMinus"
        @switch="onSeasonSwitch"
      />
      <template v-if="season.minusBoxType === 2">
        <EpisodeRow
          v-for="episode in settingEpisodeLinBoxType(
            filterList(season.episodes),
            season.isLast ? 0 : 1,
          )"
          :key="episode.episode_id"
          :episodeData="episode"
          @switch="() => onEpisodeSwitch(season, episode)"
        />
      </template>
    </template>
  </template>
</template>
<script>
import Lazy from 'lazy.js'
import SeriesRow from './SeriesRow.vue'
import SeasonRow from './SeasonRow.vue'
import EpisodeRow from './EpisodeRow.vue'
export default {
  name: 'SeriesLists',
  components: { SeriesRow, SeasonRow, EpisodeRow },
  props: ['seriesData'],
  data() {
    return {}
  },
  computed: {
    seasons() {
      return this.seriesData.seasons
    },
    dateStr() {
      return this.seriesData.date
    },
  },
  methods: {
    onSeasonSwitch(data) {
      data.series = this.seriesData
      this.$emit('switch', data)
    },
    onEpisodeSwitch(season, episode) {
      this.onSeasonSwitch({
        season,
        episode,
      })
    },
    onMinus(seasonData) {
      this.$emit('minus', {
        season: seasonData,
        series: this.seriesData,
      })
    },
    filterList(list) {
      return Lazy(list)
        .filter(({ isFilter }) => {
          return isFilter
        })
        .toArray()
    },
    settingSeasonLinBoxType(seasons) {
      let _lsatItem
      seasons.forEach((_item) => {
        _lsatItem = _item
        _lsatItem.lineBoxType = 1
        _lsatItem.isLast = false
      })
      _lsatItem && (_lsatItem.lineBoxType = 2)
      _lsatItem && (_lsatItem.isLast = true)
      return seasons
    },
    settingEpisodeLinBoxType(episodes, type) {
      let _lsatItem
      episodes.forEach((_item) => {
        _lsatItem = _item
        _lsatItem.lineBox2Type = type
        _lsatItem.lineBoxType = 1
      })
      _lsatItem && (_lsatItem.lineBoxType = 2)
      return episodes
    },
  },
}
</script>
<style lang="postcss" scoped></style>
