<script setup lang="ts">
import { onMounted, ref } from 'vue'

import fetchRenderData from '@/utils/fetchRenderData'
import { useComponentMapper } from '@/composables/useComponentMapper'

import { type ComponentItem } from '@/types'

const fetchingData = ref(true)
const componentsData = ref<ComponentItem[]>([])

const { mapDataToComponents } = useComponentMapper()

onMounted(async () => {
  const data = await fetchRenderData()
  fetchingData.value = false
  componentsData.value = mapDataToComponents(data.data)
})
</script>

<template>
  <h2 v-if="fetchingData">Loading...</h2>
  <template v-else>
    <component
      v-for="(comp, index) in componentsData"
      :key="index"
      :is="comp.type"
      v-bind="comp.props"
    />
  </template>
</template>
