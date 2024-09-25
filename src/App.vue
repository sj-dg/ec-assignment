<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="max-w-3xl mx-auto mt-4">
    <header class="p-4 bg-gray-300 rounded-sm">
      <div class="wrapper">
        <nav>
          <RouterLink to="/" class="hover:opacity-60">Example 1</RouterLink>
          <RouterLink to="/about" class="ml-4 hover:opacity-60">Example 2</RouterLink>
        </nav>
      </div>
    </header>

    <div class="p-4 border border-gray-300 rounded-sm mt-4">
      <RouterView />
    </div>
  </div>
</template>
