<template>
  <div class="collapse-box">
    <Collapse class="collapse-icon" />
  </div>
</template>
<script>
import Collapse from './Collapse.vue'
export default {
  name: 'CollapseBox',
  components: { Collapse },
  data() {
    return {}
  },
}
</script>
<style scoped>
.collapse-box {
  flex: 0 0 30px;
  position: relative;
}
.collapse-icon {
  top: 50%;
  left: 50%;
}
</style>
