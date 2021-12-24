<template>
  <div class="item">
    <LineBox class="c1" v-bind="$attrs" />
    <MinusBox v-bind="$attrs" />
    <div class="c2">1233</div>
    <div class="c3">Demonlover</div>
    <div class="c4">Movie</div>
    <div class="c5">4</div>
    <div class="c6">36</div>
    <div class="c7">Jan 3, 2020</div>
    <div class="c7">Single Movie</div>
  </div>
</template>
<script>
import LineBox from './box/LineBox.vue'
import MinusBox from './box/MinusBox.vue'
export default {
  name: 'MovItem',
  components: { LineBox, MinusBox },
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
  flex: 0 0 50px;
}
.c2 {
  flex: 1 1 auto;
}
.c3 {
  flex: 1 1 auto;
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
  flex: 1 1 auto;
}
</style>
