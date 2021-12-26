<template>
  <div id="DramaRosHeader">
    <div class="table-cell align-middle">
      <div class="flex items-center tb1">
        <div class="table-cell c1"></div>
        <div class="table-cell c2">ID</div>
        <div class="table-cell c3">Title Name</div>
      </div>
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
    return {
      off: false,
    }
  },
  watch: {
    off(val) {
      console.log('xxx', val)
    },
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      if (document.documentElement.scrollTop > 140) {
        this.off = true
      } else {
        this.off = false
      }
    })
  },
}
</script>
<style scoped>
#DramaRosHeader {
  height: 48px;
  display: table-header-group;
  background: rgba(32, 32, 32, 0.05);
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
}
.tb1 {
  width: 340px;
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
.c7 {
  width: 200px;
}
.c8 {
  width: 150px;
}
</style>
