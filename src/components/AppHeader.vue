<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()

// Function to switch language
function switchLanguage(lang) {
  locale.value = lang
}

// Watch for changes in locale and set the document direction
watch(
  locale,
  (newLocale) => {
    document.documentElement.lang = newLocale
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  },
  { immediate: true },
)
</script>

<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <RouterLink to="/"><img src="@/assets/logo.png" alt="IIS Holding Logo" /></RouterLink>
      </div>
      <nav class="main-nav">
        <RouterLink to="/">{{ $t('header.home') }}</RouterLink>
        <RouterLink to="/about">{{ $t('header.about') }}</RouterLink>
        <RouterLink to="/portfolio">{{ $t('header.portfolio') }}</RouterLink>
        <RouterLink to="/contact">{{ $t('header.contact') }}</RouterLink>
      </nav>
      <div class="lang-switcher">
        <a href="#" @click.prevent="switchLanguage('en')" :class="{ active: locale === 'en' }"
          >EN</a
        >
        <a href="#" @click.prevent="switchLanguage('ar')" :class="{ active: locale === 'ar' }"
          >AR</a
        >
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  padding: 25px 50px; /* Increased vertical padding for more space */
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
}
.header-container {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.logo {
  margin-right: auto;
}
.logo img {
  height: 65px; /* <-- DEFINITIVE FIX: Significantly larger for brand presence */
  display: block;
}
.main-nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #00234b;
  font-weight: 500;
  font-size: 1.1em; /* Slightly larger nav text to match new logo size */
}
.lang-switcher {
  margin-left: auto;
}
.lang-switcher a {
  margin-left: 10px;
  text-decoration: none;
  color: #00234b;
  padding: 5px;
  font-weight: 500;
}
.lang-switcher .active {
  color: #b58e3e;
  font-weight: bold;
  border-bottom: 2px solid #b58e3e;
}

/* RTL Specific adjustments */
html[dir='rtl'] .logo {
  margin-left: auto;
  margin-right: 0;
}
html[dir='rtl'] .main-nav a {
  margin: 0 15px;
}
html[dir='rtl'] .lang-switcher a {
  margin-left: 0;
  margin-right: 10px;
}
</style>
