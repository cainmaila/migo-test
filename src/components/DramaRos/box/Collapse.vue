<template>
  <div class="collapse the-middle">
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
}
.icon {
  width: 10px;
  height: 8px;
}
.open {
  transform: rotate(90deg);
}
</style>
