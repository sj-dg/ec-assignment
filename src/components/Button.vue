<script setup lang="ts">
import { type ButtonProps } from '@/types'

defineProps<ButtonProps>()
</script>

<template>
  <button>{{ label }}</button>
</template>
