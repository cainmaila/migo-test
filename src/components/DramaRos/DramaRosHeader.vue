<template>
  <div id="DramaRosHeader">
    <div class="table-cell align-middle">
      <div class="table-cell c1"></div>
      <div class="table-cell c2">ID</div>
      <div class="table-cell c3">Title Name</div>
    </div>
    <div class="table-cell align-middle c4">Type</div>
    <div class="table-cell align-middle c5">Season</div>
    <div class="table-cell align-middle c6">Episode</div>
    <div class="table-cell align-middle c7">Published</div>
    <div class="table-cell align-middle c8">Programmable</div>
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
  /* display: table-row; */
  display: table-header-group;
  background: #2020200d;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
}
.c1 {
  width: 32px;
}
.c2 {
  width: 56px;
}
.c3 {
  max-width: 256px;
}
.c4 {
  width: 72px;
}
.c5 {
  width: 48px;
}
.c6 {
  width: 56px;
}
.c8 {
  width: 150px;
}
</style>
