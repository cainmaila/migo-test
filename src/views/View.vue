<script setup>
import { ref } from 'vue'
import MigoHandler from '../components/MigoHeader/index.vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <MigoHandler />
</template>

<style scoped></style>
