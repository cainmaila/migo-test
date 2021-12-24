<template>
  <div class="item">
    <div class="c1"></div>
    <div class="c2">715156</div>
    <div class="c3">
      Long Movie Title Name Long Movie Title NameLong Movie Title NameLong Movie
      Ti...
    </div>
    <div class="c4">Movie</div>
    <div class="c5">--</div>
    <div class="c6">--</div>
    <div class="c7">Jan 3, 2020</div>
    <div class="c8">Single Movie</div>
  </div>
</template>
<script>
import CollapseBox from './box/CollapseBox.vue'
export default {
  name: 'SeriesRow',
  components: { CollapseBox },
  data() {
    return {}
  },
}
</script>
<style scoped>
.item {
  height: 48px;
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
}
.c1 {
  flex: 0 0 32px;
}
.c2 {
  flex: 0 0 64px;
}
.c3 {
  flex: 4 4 auto;
}
.c4 {
  flex: 1 1 auto;
}
.c5 {
  flex: 1 1 auto;
}
.c6 {
  flex: 1 1 auto;
}
.c7 {
  flex: 4 4 auto;
}
.c8 {
  flex: 2 2 auto;
}
</style>
