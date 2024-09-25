<script setup lang="ts">
import { type CardProps } from '@/types'
import DOMPurify from 'dompurify'
import { computed } from 'vue'

const props = defineProps<CardProps>()

const sanitizedContent = computed(() => DOMPurify.sanitize(props.content))
</script>

<template>
  <div class="bg-white shadow-md rounded-lg p-4">
    <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
    <p v-html="sanitizedContent"></p>
  </div>
</template>
