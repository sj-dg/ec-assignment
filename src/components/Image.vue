<script setup lang="ts">
import { type ImageProps } from '@/types'

defineProps<ImageProps>()
</script>

<template>
  <figure class="grid place-items-center">
    <img :src="src" />
  </figure>
</template>
