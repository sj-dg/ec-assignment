<script setup lang="ts">
import { type ImageProps } from '@/types'

defineProps<ImageProps>()
</script>

<template>
  <img :src="src" />
</template>
