<script setup lang="ts">
import { type ButtonProps } from '@/types'

defineProps<ButtonProps>()
</script>

<template>
  <button class="bg-fuchsia-300 font-semibold px-4 py-2 rounded-sm">{{ label }}</button>
</template>
