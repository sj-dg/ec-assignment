<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useUIDataStore } from './stores/useUIDataStore'
const uiDataStore = useUIDataStore()
</script>

<template>
  <div class="w-11/12 lg:max-w-3xl mx-auto mt-4">
    <header class="p-4 bg-gray-300">
      <div class="wrapper">
        <nav class="text-center" :class="{ 'pointer-events-none': uiDataStore.fetching }">
          <RouterLink to="/" class="p-2 rounded-lg hover:bg-white">Example 1</RouterLink>
          <RouterLink to="/example-2" class="p-2 rounded-lg ml-4 hover:bg-white">
            Example 2
          </RouterLink>
        </nav>
      </div>
    </header>

    <main class="p-4 border border-gray-300 rounded-sm mt-4">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-white;
}
</style>
