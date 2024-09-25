<script setup lang="ts">
import { type ButtonProps } from '@/types'

defineProps<ButtonProps>()

const colorMap = {
  blue: 'bg-blue-500 text-white',
  green: 'bg-green-500',
  red: 'bg-red-500 text-white',
  yellow: 'bg-yellow-500'
}
</script>

<template>
  <button class="font-semibold px-4 py-2 rounded-sm hover:opacity-80" :class="colorMap[color]">
    {{ label }}
  </button>
</template>
