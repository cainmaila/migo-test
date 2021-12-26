<template>
  <div id="MigoLogo" class="the-middle">
    <div class="the-middle">
      <img :src="`migo.svg`" alt="Migo" />
      <div class="logo-tile">Content<br />Marketing</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MigoLogo',
  data() {
    return {}
  },
}
</script>
<style lang="postcss" scoped>
#MigoLogo {
  width: 190px;
  height: 100%;
  background: #000000;
}
.logo-tile {
  @apply text-white;
  font-weight: 900;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: justify;
}
</style>
