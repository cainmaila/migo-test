<template>
  <div id="MenuTil">
    <div>
      <img :src="`img/inventory.svg`" alt="" />
    </div>
    <div class="til">Inventory</div>
  </div>
</template>
<script>
export default {
  name: 'MenuTil',
  data() {
    return {}
  },
}
</script>
<style lang="postcss" scoped>
#MenuTil {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 26px;
  width: 176px;
  height: 100%;
  background: #e31e30;
  box-shadow: inset 0px -4px 0px #ffffff;
}
.til {
  margin-left: 14px;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.25px;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
