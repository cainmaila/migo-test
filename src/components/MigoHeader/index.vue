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
<style lang="postcss" scoped>
#MigoHeader {
  height: 64px;
  background: #e31e30;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}
</style>
