<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const { locale } = useI18n()
const router = useRouter()

// State for the mobile menu
const isMobileMenuOpen = ref(false)

// Function to toggle the mobile menu
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Watch for route changes to close the mobile menu automatically
router.afterEach(() => {
  isMobileMenuOpen.value = false
})

// --- NEW FUNCTION TO TOGGLE LANGUAGE ---
function toggleLanguage() {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  locale.value = newLocale
}

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

      <!-- Desktop Navigation -->
      <nav class="main-nav">
        <RouterLink to="/">{{ $t('header.home') }}</RouterLink>
        <RouterLink to="/about">{{ $t('header.about') }}</RouterLink>
        <RouterLink to="/portfolio">{{ $t('header.portfolio') }}</RouterLink>
        <RouterLink to="/contact">{{ $t('header.contact') }}</RouterLink>
      </nav>

      <!-- Hamburger Button for Mobile -->
      <button @click="toggleMobileMenu" class="mobile-nav-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile Navigation Menu (Overlay) -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="mobile-nav-overlay">
          <nav class="mobile-nav">
            <RouterLink to="/">{{ $t('header.home') }}</RouterLink>
            <RouterLink to="/about">{{ $t('header.about') }}</RouterLink>
            <RouterLink to="/portfolio">{{ $t('header.portfolio') }}</RouterLink>
            <RouterLink to="/contact">{{ $t('header.contact') }}</RouterLink>
          </nav>
        </div>
      </transition>

      <!-- Language Switcher (Desktop only) -->
      <!-- --- REPLACED THE TWO LINKS WITH A SINGLE BUTTON --- -->
      <div class="lang-switcher">
        <a href="#" @click.prevent="toggleLanguage" class="lang-button">
          {{ locale === 'en' ? 'AR' : 'EN' }}
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* DESKTOP STYLES */
.app-header {
  padding: 25px 50px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #fff;
  position: relative;
  z-index: 100;
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
  height: 65px;
  display: block;
}
.main-nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #00234b;
  font-weight: 500;
  font-size: 1.1em;
}
.lang-switcher {
  margin-left: 20px;
}
/* --- NEW STYLES FOR THE SINGLE BUTTON --- */
.lang-button {
  text-decoration: none;
  color: #00234b;
  background-color: #f0f0f0;
  padding: 8px 15px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9em;
  border: 1px solid transparent;
}
.lang-button:hover {
  border-color: #b58e3e;
  opacity: 1;
}

/* MOBILE MENU DEFAULTS (HIDDEN ON DESKTOP) */
.mobile-nav-toggle {
  display: none;
}
.mobile-nav-overlay {
  display: none;
}

/* MEDIA QUERY FOR TABLET & MOBILE */
@media (max-width: 768px) {
  .app-header {
    padding: 15px 20px;
  }
  .logo img {
    height: 50px;
  }

  /* Hide desktop nav */
  .main-nav {
    display: none;
  }

  /* --- ADJUSTED LANGUAGE SWITCHER FOR MOBILE --- */
  .lang-switcher {
    position: absolute;
    right: 70px; /* Position it next to the hamburger */
  }

  /* Show and style hamburger button */
  .mobile-nav-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 101; /* Above header, below overlay */
    margin-left: 20px; /* Add margin to separate from language switcher */
  }
  .mobile-nav-toggle span {
    width: 30px;
    height: 3px;
    background: #00234b;
    border-radius: 10px;
    transition: all 0.3s linear;
  }

  /* Style the mobile menu overlay */
  .mobile-nav-overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.98);
    justify-content: center;
    align-items: center;
    z-index: 100;
  }
  .mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  .mobile-nav a {
    font-family: var(--font-heading);
    font-size: 2em;
    text-decoration: none;
    color: #00234b;
  }
}
</style>
