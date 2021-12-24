<template>
  <div class="minus-icon the-middle">
    <img class="icon" src="img/minus.svg" alt="" v-if="open" />
    <img class="icon" src="img/plus.svg" alt="" v-else />
  </div>
</template>
<script>
export default {
  name: 'Minus',
  props: ['open'],
  data() {
    return {}
  },
}
</script>
<style scoped>
.minus-icon {
  width: 30px;
  height: 30px;
  background: #fff;
}
.icon {
  width: 14px;
  height: 14px;
}
</style>
