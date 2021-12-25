<script async setup>
import { ref, onMounted, reactive } from 'vue'
import MigoHandler from '../components/MigoHeader/index.vue'
import DramaRos from '../components/DramaRos/index.vue'
import Search from '../components/Search.vue'
import { switchOffController } from '../controller/switchController.js'

const store = reactive({ searchText: null })

import axios from 'axios'
const seriesRef = ref()
onMounted(async () => {
  const { data } = await axios.get('./titles.json')
  seriesRef.value = data
  store.searchText = ''
})
</script>

<template>
  <MigoHandler />
  <div class="page-content">
    <h1>Inventory Manager</h1>
    <Search v-model:inputText="store.searchText" />
    <DramaRos
      :list="seriesRef"
      :searchText="store.searchText"
      @switch="switchOffController"
    />
  </div>
</template>

<style scoped>
h1 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
}
.page-content {
  padding: 16px 24px;
  margin-top: 64px;
  height: 100%;
  /* overflow-y: hidden; */
}
</style>
