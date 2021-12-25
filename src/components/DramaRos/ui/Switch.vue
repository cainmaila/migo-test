<template>
  <div
    class="switch cursor-pointer"
    :class="{ off: !off }"
    @pointerup.stop="$emit('ck')"
  >
    <div class="o" :class="{ on: !off }"></div>
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
  position: relative;
  /* display: flex; */
  /* flex-direction: row-reverse; */
  width: 47px;
  height: 21px;
  padding: 3px;
  border-radius: 20px;
  background: #08aa5e;
  transition: background 1s;
}
.off {
  /* flex-direction: row; */
  background: #b2b2b2;
}
.o {
  position: absolute;
  left: 3px;
  top: 3px;
  width: 15px;
  height: 15px;
  background: #fff;
  border-radius: 50%;
  transition: left 0.1s;
  transition-timing-function: ease-out;
}
.on {
  left: 28px;
}
</style>
