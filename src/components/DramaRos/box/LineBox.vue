<template>
  <div class="line-box">
    <div class="box box1" v-if="type" :class="{ box3: type == 2 }"></div>
    <div class="box box2" v-if="type"></div>
  </div>
</template>
<script>
export default {
  name: 'LineBox',
  props: ['type'],
  data() {
    return {}
  },
}
</script>
<style scoped>
.line-box {
  flex: 0 0 50px;
  height: 100%;
  position: relative;
}

.box {
  position: absolute;
  top: 0px;
  border: 2px solid #c3c3c2;
}
.box1 {
  height: 100%;
  width: 50%;
  border-style: none solid none none;
}
.box2 {
  height: 50%;
  width: 50%;
  right: 0px;
  border-style: none none solid none;
}
.box3 {
  height: 50%;
}
</style>
