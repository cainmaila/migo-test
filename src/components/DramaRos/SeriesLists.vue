<template>
  <SeriesRow :data="seriesData" :key="seriesData.title_id" v-bind="$attrs" />
  <template v-if="seriesData.collapseType === 2">
    <template v-for="season in filterList(seasons)" :key="season.season_id">
      <SeasonRow :seasonData="season" @minus="onMinus" />
      <template v-if="season.minusBoxType === 2">
        <EpisodeRow
          v-for="episode in filterList(season.episodes)"
          :key="episode.episode_id"
          :episodeData="episode"
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
  },
}
</script>
<style lang="postcss" scoped></style>
