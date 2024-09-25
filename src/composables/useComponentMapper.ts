import { type Component, shallowRef } from 'vue'
import Header from '@/components/Header.vue'
import Image from '@/components/Image.vue'
import Button from '@/components/Button.vue'

import { type DataItem, type ComponentItem } from '@/types'

const componentMap: Record<string, Component> = {
  header: Header,
  image: Image,
  button: Button
}

export function useComponentMapper() {
  const mapDataToComponents = (data: DataItem[]) => {
    return data.map((item) => ({
      type: shallowRef(componentMap[item.type]),
      props: item.props
    })) as ComponentItem[]
  }

  return {
    mapDataToComponents
  }
}
