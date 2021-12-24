<template>
  <div class="item">
    <div class="table-cell align-middle">
      <div class="flex items-center tb1">
        <div class="c1"></div>
        <LineBox class="c2" v-on="$props" />
        <div class="c2-id">715156</div>
        <div class="c3">
          Long Season name | Long Season name | Long Season name | Long Season
          name | Long Se...
        </div>
      </div>
    </div>
    <div class="table-cell align-middle c4">Episode</div>
    <div class="table-cell align-middle c5">--</div>
    <div class="table-cell align-middle c6">EP1</div>
    <div class="table-cell align-middle c7">--</div>
    <div class="table-cell align-middle c8">
      <div class="flex items-center">
        <Switch :off="true" />
        <span class="padding-16">All Episodes</span>
      </div>
    </div>
  </div>
</template>
<script>
import LineBox from './box/LineBox.vue'
import Switch from './ui/Switch.vue'
export default {
  name: 'EpisodeRow',
  components: { LineBox, Switch },
  data() {
    return {}
  },
}
</script>
<style scoped>
.item {
  height: 48px;
  display: table-row;
  background: #fff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
}
.tb1 {
  width: 480px;
}
.c1 {
  width: 35px;
}
.c2 {
  height: 48px;
  width: 48px;
}
.c2-id {
  width: 56px;
}
.c3 {
  max-width: 336px;
}
.c4 {
  max-width: 72px;
}
.c5 {
  max-width: 48px;
}
.c6 {
  max-width: 56px;
}
.c8 {
  max-width: 160px;
}
</style>
