<template>
  <div id="DramaRosHeader">
    <div class="c1"></div>
    <div class="c2">ID</div>
    <div class="c3">Title Name</div>
    <div class="c4">Type</div>
    <div class="c5">Season</div>
    <div class="c6">Episode</div>
    <div class="c7">Published</div>
    <div class="c7">Programmable</div>
  </div>
</template>
<script>
export default {
  name: 'DramaRosHeader',
  data() {
    return {}
  },
}
</script>
<style scoped>
#DramaRosHeader {
  height: 48px;
  display: flex;
  align-items: center;
  background: #2020200d;
}
.c1 {
  flex: 0 0 36px;
}
.c2 {
  flex: 1 1 auto;
}
.c3 {
  flex: 1 1 auto;
}
.c4 {
  flex: 1 1 auto;
}
.c5 {
  flex: 1 1 auto;
}
.c6 {
  flex: 1 1 auto;
}
.c7 {
  flex: 1 1 auto;
}
</style>
