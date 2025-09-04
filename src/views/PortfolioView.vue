<script setup>
import PageBanner from '@/components/PageBanner.vue'
import portfolioBannerImage from '@/assets/portfolio-banner.jpeg'
</script>

<template>
  <div class="portfolio-page">
    <PageBanner title="Our Portfolio of Projects" :background-image="portfolioBannerImage" />

    <!-- Key Holdings Section -->
    <section class="page-section">
      <h2 class="section-title">Key Holdings & Investments</h2>
      <div class="project-grid">
        <div class="project-card">
          <h3 class="gold-text">The Diabetes Hospital (TDH), Doha</h3>
          <p>
            Opening in 2025, a first-of-its-kind facility focused on diabetes care and limb
            preservation.
          </p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Shaza Hotel</h3>
          <p>
            A luxury hotel brand inspired by the Silk Route, with locations in Makkah, Riyadh, and
            Doha.
          </p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Abdulla Bin Ali & Partners Real Estate</h3>
          <p>
            A leading real estate company in The Pearl Qatar, specializing in development, leasing,
            and property management.
          </p>
        </div>
      </div>
    </section>

    <!-- Healthcare & Tech Section -->
    <section class="page-section grey-bg">
      <h2 class="section-title">Healthcare & Technology Investments</h2>
      <div class="project-grid">
        <div class="project-card">
          <h3 class="gold-text">Healthcare Quality Quest (UK)</h3>
          <p>Partnering in clinical audits, patient safety, and quality improvements.</p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">PatientSource (UK)</h3>
          <p>A cloud-based electronic patient record system enhancing healthcare efficiency.</p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Sanome (UK)</h3>
          <p>
            AI-powered healthcare solutions for personalized medicine and early disease detection.
          </p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Effigerm</h3>
          <p>Innovative hygiene solutions leveraging hypochlorous technology.</p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Ayurnet</h3>
          <p>A manufacturer and exporter of Ayurvedic and herbal medicine.</p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Lavida – Jarrah Honey</h3>
          <p>Premium bioactive honey sourced from Western Australia.</p>
        </div>
      </div>
    </section>

    <!-- Retail & Lifestyle Section -->
    <section class="page-section">
      <h2 class="section-title">Retail & Lifestyle Collaborations</h2>
      <div class="project-grid">
        <div class="project-card">
          <h3 class="gold-text">One Vibes Nation (Singapore)</h3>
          <p>
            The first vending machine provider for hijab and Islamic-related products, catering to
            events like the FIFA World Cup Qatar.
          </p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Janes</h3>
          <p>A leader in open-source defense and security intelligence.</p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">C2R Lighting</h3>
          <p>Experts in innovative, high-quality lighting solutions.</p>
        </div>
        <div class="project-card">
          <h3 class="gold-text">Panama Jack</h3>
          <p>Providers of premium beachwear, sun care, and accessories in Qatar.</p>
        </div>
      </div>
    </section>

    <!-- Confidentiality CTA Section -->
    <section class="page-section grey-bg">
      <div class="cta-container">
        <h2>Access Our Complete Portfolio</h2>
        <p>
          For confidentiality reasons, our full portfolio is disclosed upon the signing of a
          Non-Disclosure Agreement. Please contact us to begin the process.
        </p>
        <RouterLink to="/contact" class="btn-gold">GET IN TOUCH</RouterLink>
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
.project-card {
  border: 1px solid #eee;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  background-color: #fff;
  text-align: center; /* <-- FIX #1: Centered the text */
}
.project-card h3 {
  color: #00234b; /* Default h3 color */
}
.project-card .gold-text {
  color: #b58e3e; /* <-- FIX #2: Explicitly style the gold text */
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
