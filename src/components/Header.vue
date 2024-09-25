<script setup lang="ts">
import { type HeaderProps } from '@/types'

defineProps<HeaderProps>()
</script>

<template>
  <h3>{{ title }}</h3>
</template>
