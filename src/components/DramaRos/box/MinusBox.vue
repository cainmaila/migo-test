<template>
  <div class="minus-box">
    <div class="box" v-if="type == 2"></div>
    <Minus class="minus" :open="type" />
  </div>
</template>
<script>
import Minus from './Minus.vue'
export default {
  name: 'MinusBox',
  props: ['type'],
  components: { Minus },
  data() {
    return {}
  },
}
</script>
<style scoped>
.minus-box {
  height: 100%;
  flex: 0 0 30px;
  position: relative;
}
.minus {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.box {
  position: absolute;
  top: 70%;
  width: 50%;
  height: 50%;
  border: 2px solid #c3c3c2;
  border-style: none solid none none;
}
</style>
