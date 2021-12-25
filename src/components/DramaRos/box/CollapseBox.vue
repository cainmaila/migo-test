<template>
  <div class="collapse-box">
    <div class="box" v-if="type == 2"></div>
    <Collapse
      class="collapse-icon cursor-pointer"
      v-if="type > 0"
      :open="type == 2"
      @pointerup.stop="$emit('ck')"
    />
  </div>
</template>
<script>
import Collapse from './Collapse.vue'
export default {
  name: 'CollapseBox',
  components: { Collapse },
  props: ['type'], //0 1 2
  data() {
    return {}
  },
}
</script>
<style scoped>
.collapse-box {
  position: relative;
}
.collapse-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box {
  position: absolute;
  top: 50%;
  right: 15.5px;
  left: 0%;
  bottom: 0%;
  border: 2px solid #c3c3c2;
  border-style: none solid none none;
}
</style>
