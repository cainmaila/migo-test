<template>
  <div id="DramaRos">
    <DramaRosHeader />
    <SeriesLists
      v-for="data in list"
      :seriesData="data"
      :key="data.title_id"
      v-bind="$attrs"
    />
    <!-- <SeriesRow />
    <SeasonRow />
    <EpisodeRow :type="1" />
    <EpisodeRow :type="2" />
    <SeasonRow />
    <EpisodeRow :type="1" />
    <EpisodeRow :type="2" /> -->
  </div>
</template>
<script>
import DramaRosHeader from './DramaRosHeader.vue'
import SeasonRow from './SeasonRow.vue'
import EpisodeRow from './EpisodeRow.vue'
import SeriesLists from './SeriesLists.vue'
export default {
  name: 'DramaRos',
  components: { DramaRosHeader, SeasonRow, EpisodeRow, SeriesLists },
  props: ['list'],
  data() {
    return {}
  },
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
