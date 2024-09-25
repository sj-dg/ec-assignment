<script setup lang="ts">
import { onMounted, ref } from 'vue'

import fetchRenderData from '@/utils/fetchRenderData'
import { useComponentMapper } from '@/composables/useComponentMapper'

import { type ComponentItem } from '@/types'

const fetchingData = ref(true)
const uiData = ref<ComponentItem[]>([])

const { mapDataToComponents } = useComponentMapper()

onMounted(async () => {
  const data = await fetchRenderData()
  fetchingData.value = false
  uiData.value = mapDataToComponents(data.data)
})
</script>

<template>
  <h2 v-if="fetchingData">Loading...</h2>
  <ul class="flex flex-col gap-2" v-else>
    <li
      class="border border-gray-200 p-2 rounded-md"
      v-for="(uiDataItem, index) in uiData"
      :key="index"
    >
      <component :is="uiDataItem.component" v-bind="uiDataItem.props" />
    </li>
  </ul>
</template>
