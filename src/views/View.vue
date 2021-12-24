<script setup>
import { ref } from 'vue'
import MigoHandler from '../components/MigoHeader/index.vue'
import DramaRos from '../components/DramaRos/index.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <MigoHandler />
  <div class="page-content">
    <DramaRos />
  </div>
</template>

<style scoped>
.page-content {
  padding: 24px;
}
</style>
