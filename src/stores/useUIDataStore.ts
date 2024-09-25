import { ref } from 'vue'
import { defineStore } from 'pinia'

import { type ComponentItem } from '@/types'

import { useComponentMapper } from '@/composables/useComponentMapper'
import fetchRenderData from '@/utils/fetchRenderData'

export const useUIDataStore = defineStore('UIData', () => {
  const { mapDataToComponents } = useComponentMapper()

  const fetching = ref(false)
  const uiData = ref<ComponentItem[]>([])

  const fetchData = async () => {
    fetching.value = true
    try {
      const data = await fetchRenderData()
      uiData.value = mapDataToComponents(data.data)
    } catch (e: unknown) {
      // send errors for tracking
    } finally {
      fetching.value = false
    }
  }

  return { fetching, uiData, fetchData }
})
