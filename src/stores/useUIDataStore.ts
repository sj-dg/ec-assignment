import { defineStore } from 'pinia'

import { type ComponentItem } from '@/types'

import { useComponentMapper } from '@/composables/useComponentMapper'
import fetchRenderData from '@/utils/fetchRenderData'

/**
 * Although pinia store isn't necessary wrt scope of requirements
 * But this makes sure we can import the store in any given component and access data
 * Furthermore, we could normalize the data into key value pairs for better retrieval times
 */
export const useUIDataStore = defineStore('UIData', {
  state: () => ({
    fetching: false,
    uiData: [] as ComponentItem[]
  }),
  actions: {
    async fetchData() {
      const { mapDataToComponents } = useComponentMapper()
      this.fetching = true
      try {
        const data = await fetchRenderData()
        this.uiData = mapDataToComponents(data.data)
      } catch (e: unknown) {
        // send errors for tracking
        console.error(e)
      } finally {
        this.fetching = false
      }
    }
  }
})
