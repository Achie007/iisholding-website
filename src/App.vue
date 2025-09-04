<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppPreloader from './components/AppPreloader.vue' // <-- Import our new preloader

// This reactive variable controls the visibility
const isLoading = ref(true)

// This function will be called when the page is fully loaded
const onPageLoaded = () => {
  isLoading.value = false
}

// Set up the event listener when the component is created
onMounted(() => {
  // The 'load' event fires only after all images, fonts, and other resources are loaded
  window.addEventListener('load', onPageLoaded)
})

// Clean up the event listener when the component is destroyed to prevent memory leaks
onUnmounted(() => {
  window.removeEventListener('load', onPageLoaded)
})
</script>

<template>
  <!-- The preloader will show as long as isLoading is true -->
  <transition name="fade">
    <AppPreloader v-if="isLoading" />
  </transition>

  <!-- The main content is hidden until isLoading is false, then fades in -->
  <div v-show="!isLoading" class="main-content">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
.main-content {
  /* This ensures the content starts invisible and fades in smoothly */
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

/* We need to define the fade transition for the preloader */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
