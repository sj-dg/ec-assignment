<script setup lang="ts">
import dataResponse from '@/data/response.json'
import { onMounted, ref } from 'vue'

const fetchingData = ref(true)

const imitateFetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataResponse)
    }, 2500)
  })
}

onMounted(async () => {
  const data = await imitateFetch()
  fetchingData.value = false
  console.log(data)
})
</script>

<template>
  <h2>{{ fetchingData ? 'Loading...' : 'Data is fetched!' }}</h2>
</template>
