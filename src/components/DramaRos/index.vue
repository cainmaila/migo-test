<template>
  <div id="DramaRos">
    <DramaRosHeader />
    <MovItem />
    <MovItem type="1" />
    <MovItem type="2" />
    <MovItem />
  </div>
</template>
<script>
import DramaRosHeader from './DramaRosHeader.vue'
import MovItem from './MovItem.vue'
export default {
  name: 'DramaRos',
  components: { DramaRosHeader, MovItem },
  data() {
    return {}
  },
}
</script>
<style scoped>
#DramaRos {
  border: 1px solid #c3c3c2;
  border-radius: 4px;

  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}
</style>
