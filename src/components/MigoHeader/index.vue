<template>
  <div id="MigoHeader" class="flex">
    <MigoLogo />
    <MenuTil />
  </div>
</template>
<script>
import MigoLogo from './MigoLogo.vue'
import MenuTil from './MenuTil.vue'
export default {
  name: 'MigoHeader',
  components: { MigoLogo, MenuTil },
}
</script>
<style scoped>
#MigoHeader {
  position: fixed;
  width: 100%;
  height: 64px;
  top: 0;
  z-index: 999;
  background: #e31e30;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}
</style>
