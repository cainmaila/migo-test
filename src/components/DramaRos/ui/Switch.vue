<template>
  <div class="switch cursor-pointer" :class="{ off: !off }">
    <div class="o"></div>
  </div>
</template>
<script>
export default {
  name: 'Switch',
  props: ['off'],
  data() {
    return {}
  },
}
</script>
<style scoped>
.switch {
  display: flex;
  flex-direction: row-reverse;
  width: 47px;
  height: 21px;
  padding: 3px;
  border-radius: 20px;
  background: #08aa5e;
}
.off {
  flex-direction: row;
  background: #b2b2b2;
}
.o {
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
}
</style>
