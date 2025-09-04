<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main>
    <RouterView />
  </main>

  <AppFooter />
</template>

<style scoped>
/* For now, we'll just make sure our main content area has some space */
main {
  min-height: 80vh; /* Ensures footer isn't too high on short pages */
}
</style>
