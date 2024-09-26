<script setup lang="ts">
import { onMounted } from 'vue'
import { useUIDataStore } from '@/stores/useUIDataStore'

const uiDataStore = useUIDataStore()

onMounted(uiDataStore.fetchData)
</script>

<template>
  <h2 v-if="uiDataStore.fetching">Loading...</h2>
  <ul class="flex flex-col gap-2" v-else>
    <li
      class="border border-gray-200 p-2 rounded-md"
      v-for="(uiDataItem, index) in uiDataStore.uiData"
      :key="index"
    >
      <component :is="uiDataItem.component" v-bind="uiDataItem.props" />
    </li>
  </ul>
</template>
