<script setup>
import { ref } from 'vue'
import MigoHandler from '../components/MigoHeader/index.vue'
import DramaRos from '../components/DramaRos/index.vue'
import Search from '../components/Search.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <MigoHandler />
  <div class="page-content">
    <h1>Inventory Manager</h1>
    <Search />
    <DramaRos />
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
}
</style>
