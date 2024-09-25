import { markRaw, defineAsyncComponent } from 'vue'

import { type DataItem, type ComponentItem } from '@/types'

/**
 * We cannot use alias paths here like `@/components/...(.vue)`
 * Because we have used defineAsyncComponent() below which is a runtime utility
 * Alias is a built time utility
 */
const componentMap: Record<string, string> = {
  header: '../components/Header.vue',
  image: '../components/Image.vue',
  button: '../components/Button.vue'
}

export function useComponentMapper() {
  const mapDataToComponents = (data: DataItem[]) => {
    return data.map((item) => ({
      /**
       * vue shows warning in console about component being marked as reactive
       * using markRaw to pass component as non-reactive object
       *
       * defineAsyncComponent will help in code splitting so that if endpoint does not want to render a component
       * code related to that component won't be downloaded
       */
      type: markRaw(defineAsyncComponent(() => import(componentMap[item.type]))),
      props: item.props
    })) as ComponentItem[]
  }

  return {
    mapDataToComponents
  }
}
