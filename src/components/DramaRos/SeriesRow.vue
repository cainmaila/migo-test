<template>
  <div class="item">
    <div class="table-cell align-middle">
      <div class="flex items-center tb1">
        <CollapseBox class="c1" :type="2" />
        <div class="c2">715156</div>
        <div class="c3">
          Long Movie Title Name Long Movie Title NameLong Movie Title NameLong
          Movie Ti...
        </div>
      </div>
    </div>
    <div class="table-cell align-middle c4">Movie</div>
    <div class="table-cell align-middle c5">--</div>
    <div class="table-cell align-middle c6">--</div>
    <div class="table-cell align-middle c7">Jan 3, 2020</div>
    <div class="table-cell align-middle c8">
      <div class="flex items-center">
        <Switch :off="true" />
        <span class="padding-16">Single Movie</span>
      </div>
    </div>
  </div>
</template>
<script>
import CollapseBox from './box/CollapseBox.vue'
import Switch from './ui/Switch.vue'
export default {
  name: 'SeriesRow',
  components: { CollapseBox, Switch },
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
  width: 340px;
}
.c1 {
  width: 32px;
  height: 48px;
}
.c2 {
  width: 56px;
  font-weight: normal;
  color: #494948;
}
.c3 {
  max-width: 256px;
  font-weight: 500;
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
