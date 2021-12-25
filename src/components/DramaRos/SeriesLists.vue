<template>
  <SeriesRow :data="seriesData" :key="seriesData.title_id" v-bind="$attrs" />
  <template v-if="seriesData.collapseType === 2">
    <SeasonRow
      v-for="season in seasons"
      :seasonData="season"
      :key="season.season_id"
    />
  </template>
</template>
<script>
import SeriesRow from './SeriesRow.vue'
import SeasonRow from './SeasonRow.vue'
export default {
  name: 'SeriesLists',
  components: { SeriesRow, SeasonRow },
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
}
</script>
<style lang="postcss" scoped></style>
