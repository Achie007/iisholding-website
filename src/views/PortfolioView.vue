<script setup>
import PageBanner from '@/components/PageBanner.vue'
import portfolioBannerImage from '@/assets/portfolio-banner.jpeg'
</script>

<template>
  <div class="portfolio-page">
    <PageBanner
      :title="$t('portfolio_page.banner_title')"
      :background-image="portfolioBannerImage"
    />

    <!-- Key Holdings Section -->
    <section class="page-section">
      <h2 class="section-title">{{ $t('portfolio_page.key_holdings_title') }}</h2>
      <div class="project-grid">
        <a href="#" target="_blank" rel="noopener noreferrer" class="project-card-link">
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.tdh_name') }}</h3>
            <p>
              {{ $t('portfolio_page.tdh_desc') }}
            </p>
          </div>
        </a>
        <a
          href="https://www.shazahotels.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.shaza_name') }}</h3>
            <p>
              {{ $t('portfolio_page.shaza_desc') }}
            </p>
          </div>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="project-card-link">
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.abap_name') }}</h3>
            <p>
              {{ $t('portfolio_page.abap_desc') }}
            </p>
          </div>
        </a>
      </div>
    </section>

    <!-- Healthcare & Tech Section -->
    <section class="page-section grey-bg">
      <h2 class="section-title">{{ $t('portfolio_page.health_tech_title') }}</h2>
      <div class="project-grid">
        <a
          href="https://www.hqq.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.hqq_name') }}</h3>
            <p>{{ $t('portfolio_page.hqq_desc') }}</p>
          </div>
        </a>
        <a
          href="https://www.patientsource.co.uk/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.ps_name') }}</h3>
            <p>{{ $t('portfolio_page.ps_desc') }}</p>
          </div>
        </a>
        <a
          href="https://sanome.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.sanome_name') }}</h3>
            <p>
              {{ $t('portfolio_page.sanome_desc') }}
            </p>
          </div>
        </a>
        <a
          href="https://effigerm.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.effigerm_name') }}</h3>
            <p>{{ $t('portfolio_page.effigerm_desc') }}</p>
          </div>
        </a>
        <a
          href="https://www.ayurnethealthcare.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.ayurnet_name') }}</h3>
            <p>{{ $t('portfolio_page.ayurnet_desc') }}</p>
          </div>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="project-card-link">
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.lavida_name') }}</h3>
            <p>{{ $t('portfolio_page.lavida_desc') }}</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Retail & Lifestyle Section -->
    <section class="page-section">
      <h2 class="section-title">{{ $t('portfolio_page.retail_title') }}</h2>
      <div class="project-grid">
        <a
          href="https://onehalalnation.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.one_vibes_name') }}</h3>
            <p>
              {{ $t('portfolio_page.one_vibes_desc') }}
            </p>
          </div>
        </a>
        <a
          href="https://www.janes.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.janes_name') }}</h3>
            <p>{{ $t('portfolio_page.janes_desc') }}</p>
          </div>
        </a>
        <a
          href="https://c2rlighting.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.c2r_name') }}</h3>
            <p>{{ $t('portfolio_page.c2r_desc') }}</p>
          </div>
        </a>
        <a
          href="https://panamajack.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card-link"
        >
          <div class="project-card">
            <h3 class="gold-text">{{ $t('portfolio_page.panama_jack_name') }}</h3>
            <p>{{ $t('portfolio_page.panama_jack_desc') }}</p>
          </div>
        </a>
      </div>
    </section>

    <!-- Confidentiality CTA Section -->
    <section class="page-section grey-bg">
      <div class="cta-container">
        <h2>{{ $t('portfolio_page.cta_title') }}</h2>
        <p>
          {{ $t('portfolio_page.cta_desc') }}
        </p>
        <RouterLink to="/contact" class="btn-gold">{{
          $t('portfolio_page.cta_button')
        }}</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-section {
  padding: 80px 50px;
}
.grey-bg {
  background-color: #f8f8f8;
}
.section-title {
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 50px;
  color: #00234b;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.project-card-link {
  text-decoration: none;
  color: inherit;
}
.project-card-link[href='#'] {
  pointer-events: none;
  cursor: default;
}
.project-card {
  border: 1px solid #eee;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  text-align: center;
  height: 100%;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
.project-card h3 {
  color: #00234b;
}
.project-card .gold-text {
  color: #b58e3e;
}
.cta-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}
.cta-container h2 {
  font-size: 1.8em;
  color: #00234b;
}
.cta-container p {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 30px;
}
.btn-gold {
  background-color: #b58e3e;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}
</style>
