<script setup lang="ts">
import { type HeaderProps } from '@/types'

defineProps<HeaderProps>()

/**
 * Tailwind can only read and parse complete classnames
 * So if we use string literals `text-{size}` it does not generate classes
 */
const textSize = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
}
</script>

<template>
  <h3 :class="`p-2 ${textSize[size]}`">{{ title }}</h3>
</template>
