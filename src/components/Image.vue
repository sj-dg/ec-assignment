<script setup lang="ts">
import { type ImageProps } from '@/types'

defineProps<ImageProps>()

const roundedConfig = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full'
}
</script>

<template>
  <figure class="grid place-items-center">
    <img :src :alt :class="roundedConfig[rounded]" />
  </figure>
</template>
