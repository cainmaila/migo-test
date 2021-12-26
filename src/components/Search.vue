<template>
  <div id="Search">
    <input
      type="search"
      placeholder="Search for titles in inventory"
      v-model="text"
    />
    <img :src="`img/search.svg`" alt="" />
  </div>
</template>
<script>
let _tmp
export default {
  name: 'Search',
  props: ['inputText'],
  emits: ['update:inputText'],
  data() {
    return {}
  },
  computed: {
    text: {
      get() {
        return this.inputText
      },
      set(val) {
        clearTimeout(_tmp)
        _tmp = setTimeout(() => {
          this.$emit('update:inputText', val.trim())
        }, 200) //lazy 200ms!
      },
    },
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
