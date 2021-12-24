<template>
  <div id="Search">
    <input type="search" placeholder="Search for titles in inventory" />
    <img src="img/search.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {}
  },
}
</script>
<style scoped>
#Search {
  position: relative;
  padding: 16px 0;
}
input {
  width: 419px;
  height: 40px;
  padding: 0 16px 0 56px;
  background: rgba(32, 32, 32, 0.05);
  border: 1px solid #b2b2b2;
  box-sizing: border-box;
  border-radius: 4px;
  pointer-events: auto;
}
img {
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
</style>
