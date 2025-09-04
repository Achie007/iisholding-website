<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-column">
        <!-- Logo will go here -->
        <h4>IIS HOLDING</h4>
        <p>Integrated Intelligence Services</p>
      </div>
      <div class="footer-column">
        <h4 class="gold-text">{{ $t('footer.contact_us') }}</h4>
        <p>P.O. Box 14731 Doha, Qatar</p>
        <p>Tel: +974 4434 2271</p>
        <p>Email: info@iisholding.com</p>
      </div>
      <div class="footer-column">
        <h4 class="gold-text">{{ $t('footer.quick_links') }}</h4>
        <RouterLink to="/about">About Us</RouterLink>
        <RouterLink to="/portfolio">Our Portfolio</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </div>
    </div>
    <div class="copyright-bar">
      {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
/* We will improve these styles later */
.app-footer {
  background-color: #00234b;
  color: white;
  padding: 50px 0 0 0;
}
.footer-container {
  display: flex;
  justify-content: space-around;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 50px;
}
.footer-column a {
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
}
.gold-text {
  color: #b58e3e;
}
.copyright-bar {
  background-color: #001a38;
  color: #aaa;
  text-align: center;
  padding: 15px;
}
</style>
