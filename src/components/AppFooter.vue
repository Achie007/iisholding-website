<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-main">
        <!-- Column 1: Brand -->
        <div class="footer-column brand-info">
          <RouterLink to="/" class="footer-logo">
            <!-- Using the new, correct all-gold logo file -->
            <img src="@/assets/logo-gold.png" alt="IIS Holding Logo" />
          </RouterLink>
          <p class="slogan">Strategic Growth, Global Impact.</p>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="footer-column">
          <h4 class="gold-text">Quick Links</h4>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About Us</RouterLink>
          <RouterLink to="/portfolio">Our Portfolio</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </div>

        <!-- Column 3: Contact Info -->
        <div class="footer-column">
          <h4 class="gold-text">Contact Us</h4>
          <p>P.O. Box 14731 Doha, Qatar</p>
          <p>Tel: +974 4434 2271</p>
          <p>Email: info@iisholding.com</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">{{ $t('footer.copyright') }}</p>
        <div class="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">X / Twitter</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background-color: var(--color-primary);
  color: rgba(255, 255, 255, 0.8);
  padding: 60px 20px 20px 20px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.footer-main {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.footer-column {
  flex: 1;
}
.brand-info {
  flex-basis: 40%;
}
.footer-logo img {
  height: 60px;
  margin-bottom: 15px;
  /* The filter is now removed as it's not needed */
}
.slogan {
  font-style: italic;
  opacity: 0.7;
}
.footer-column h4 {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.gold-text {
  color: var(--color-accent);
}
.footer-column p,
.footer-column a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  display: block;
  margin-bottom: 12px;
}
.footer-column a:hover {
  color: #fff;
  opacity: 1;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  opacity: 0.7;
}
.social-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-left: 20px;
}
.social-links a:hover {
  color: #fff;
  opacity: 1;
}
</style>
