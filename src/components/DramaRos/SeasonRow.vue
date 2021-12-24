<template>
  <div class="item">
    <div class="table-cell align-middle">
      <div class="flex items-center">
        <div class="c1">x</div>
        <div class="c1">x</div>
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
    <div class="table-cell align-middle c8">All Episodes</div>
  </div>
</template>
<script>
import CollapseBox from './box/CollapseBox.vue'
export default {
  name: 'SeasonRow',
  components: { CollapseBox },
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
.c1 {
  width: 32px;
}
.c2 {
  width: 56px;
}
.c3 {
  max-width: 256px;
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
