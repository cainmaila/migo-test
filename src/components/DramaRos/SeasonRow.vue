<template>
  <div class="item">
    <div class="table-cell align-middle">
      <div class="flex items-center tb1">
        <LineBox class="c1" :type="3" />
        <MinusBox class="c1" :type="2" />
        <div class="c2">715156</div>
        <div class="c3">
          Long Season name | Long Season name | Long Season name | Long Season
          name | Long Se...
        </div>
      </div>
    </div>
    <div class="table-cell align-middle c4">Season</div>
    <div class="table-cell align-middle c5">S2</div>
    <div class="table-cell align-middle c6">2</div>
    <div class="table-cell align-middle c7">Jan 3, 2020</div>
    <div class="table-cell align-middle c8">
      <div class="flex items-center">
        <Switch :off="true" />
        <span class="padding-16"> All Episodes</span>
      </div>
    </div>
  </div>
</template>
<script>
import LineBox from './box/LineBox.vue'
import MinusBox from './box/MinusBox.vue'
import Switch from './ui/Switch.vue'
export default {
  name: 'SeasonRow',
  components: { LineBox, MinusBox, Switch },
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
.item:hover {
  background: rgba(78, 160, 221, 0.1);
}
.tb1 {
  width: 450px;
}
.c1 {
  height: 48px;
  width: 40px;
}
.c2 {
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
.padding-16 {
  padding-left: 16px;
}
</style>
