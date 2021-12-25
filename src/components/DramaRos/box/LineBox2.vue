<template>
  <div class="line-box">
    <div class="box" v-if="type"></div>
  </div>
</template>
<script>
export default {
  name: 'LineBox2',
  props: ['type'], //1 0
  data() {
    return {}
  },
}
</script>
<style scoped>
.line-box {
  height: 100%;
  width: 35px;
}

.box {
  height: 100%;
  width: 15px;
  border: 2px solid #c3c3c2;
  border-style: none solid none none;
}
</style>
