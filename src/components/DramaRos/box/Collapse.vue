<template>
  <div class="collapse">
    <img class="icon" :class="{ open }" src="img/collapse.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: 'Collapse',
  props: ['open'],
  data() {
    return {}
  },
}
</script>
<style scoped>
.collapse {
  width: 14px;
  height: 14px;
  background-color: #fff;
}
.icon {
  width: 10px;
  height: 10px;
}
.icon.opne {
  transform: rotate(90deg);
}
</style>
