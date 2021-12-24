<template>
  <div id="DramaRos">
    <DramaRosHeader />
    <SeriesRow />
    <SeasonRow />
    <EpisodeRow :type="1" />
    <EpisodeRow :type="2" />
    <!-- <SeasonRow type="1" />
    <SeasonRow type="2" />
    <EpisodeRow type="1" />
    <EpisodeRow type="2" /> -->
  </div>
</template>
<script>
import DramaRosHeader from './DramaRosHeader.vue'
import SeriesRow from './SeriesRow.vue'
import SeasonRow from './SeasonRow.vue'
import EpisodeRow from './EpisodeRow.vue'
export default {
  name: 'DramaRos',
  components: { DramaRosHeader, SeasonRow, SeriesRow, EpisodeRow },
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
