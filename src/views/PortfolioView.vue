<script setup>
import PageBanner from '@/components/PageBanner.vue'
import portfolioBannerImage from '@/assets/portfolio-banner.jpeg'
</script>

<template>
  <div class="portfolio-page">
    <PageBanner title="Our Portfolio of Projects" :background-image="portfolioBannerImage" />

    <!-- Project Grid Section -->
    <section class="page-section">
      <div class="project-grid">
        <!-- We will list all projects from the PDF here -->
        <div class="project-card">
          <h3>The Diabetes Hospital</h3>
          <p>
            A state-of-the-art hospital to treat and manage diabetes complications, featuring the
            first center in the Middle East to specialize in diabetic limb salvage.
          </p>
        </div>
        <div class="project-card">
          <h3>PatientSource - UK</h3>
          <p>
            A leading healthcare technology provider of cloud-based electronic patient record (EPR)
            systems to enhance patient care and streamline workflows.
          </p>
        </div>
        <div class="project-card">
          <h3>Sanome - UK</h3>
          <p>
            A pioneering healthcare technology company revolutionizing personalized medicine with
            its advanced AI-powered Clinical Co-pilot.
          </p>
        </div>
        <div class="project-card">
          <h3>Janes</h3>
          <p>
            A leading provider of open-source defense and security intelligence, delivering verified
            and validated military OSINT through a rigorous tradecraft process.
          </p>
        </div>
        <div class="project-card">
          <h3>One Vibes Nation - SG</h3>
          <p>
            Successfully provided vending machines for the FIFA World Cup, becoming the first in the
            world to dispense hijab and Islamic-related products.
          </p>
        </div>
        <div class="project-card">
          <h3>Edible Garden City</h3>
          <p>
            A social enterprise that champions the Grow-Your-Own-Food movement in Singapore to
            improve food sustainability and resilience.
          </p>
        </div>
        <div class="project-card">
          <h3>Panama Jack</h3>
          <p>
            Launched the brand of beach wear and apparel products in Qatar, partnering with major
            entities like Six Flags which spans 42 amusement parks.
          </p>
        </div>
        <div class="project-card">
          <h3>SATAVIA</h3>
          <p>
            A UK company reducing the carbon footprint in the airline industry by reducing contrails
            during flight through advanced analytics.
          </p>
        </div>
        <div class="project-card">
          <h3>Biophilic</h3>
          <p>
            A Singapore company focusing in Landscape Architecture Design & Environmental
            Engineering with a mantra of Feeding our Future, Protecting Climate Change.
          </p>
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
        <a href="/contact" class="btn-gold">GET IN TOUCH</a>
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
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}
.project-card {
  border: 1px solid #eee;
  padding: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  background-color: #fff;
}
.project-card h3 {
  color: #00234b;
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
