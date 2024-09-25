<script setup lang="ts">
import { type HeaderProps } from '@/types'

defineProps<HeaderProps>()
</script>

<template>
  <h3 class="p-2 text-xl">{{ title }}</h3>
</template>
