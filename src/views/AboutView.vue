<script setup>
import PageBanner from '@/components/PageBanner.vue'
import aboutBannerImage from '@/assets/about-banner.jpeg'
</script>

<template>
  <div class="about-page">
    <PageBanner title="Who We Are" :background-image="aboutBannerImage" />

    <!-- Main About Us Section -->
    <section class="page-section">
      <div class="container text-center">
        <p class="intro-text">
          Established in 2011 in the State of Qatar, IIS Holding is a premier investment and
          business development firm dedicated to fostering sustainable, high-value ventures that
          align with Qatar’s economic vision and global expansion goals. As a locally rooted
          organization with a global perspective, we specialize in identifying niche opportunities
          and leveraging innovative technologies to drive growth across diverse industries.
        </p>
        <!-- THIS IS THE FIX: A properly styled RouterLink button -->
        <RouterLink to="/portfolio" class="btn-gold cta-button">Explore Our Portfolio</RouterLink>
      </div>
    </section>

    <!-- Vision & Mission Section (High Impact) -->
    <section class="page-section vision-mission-bg">
      <div class="container vision-mission-container">
        <div class="vm-column">
          <h2>Our Vision</h2>
          <p>
            To be a global leader in innovation-driven business development, fostering high-value,
            sustainable ventures through strategic partnerships. By integrating cutting-edge
            technologies and market expertise, we aim to position Qatar as a hub for innovation
            across key sectors.
          </p>
        </div>
        <div class="vm-column">
          <h2>Our Mission</h2>
          <p>
            To deliver pioneering healthcare and wellness solutions that align with Qatar’s National
            Vision and Development Strategy. Leveraging advanced technology and niche market
            expertise, we address critical healthcare quality, societal well-being, and
            epidemiological needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Core Pillars Section -->
    <section class="page-section">
      <div class="container">
        <h2 class="section-title">Our Core Principles</h2>
        <div class="pillars-grid">
          <div class="pillar-card">
            <h3>Our Values</h3>
            <p>
              We operate with integrity and innovation, prioritizing sustainability, excellence, and
              collaboration in every venture.
            </p>
          </div>
          <div class="pillar-card">
            <h3>What Sets Us Apart</h3>
            <p>
              Our strategic vision, diversified portfolio, and technology-driven solutions are
              strengthened by deep stakeholder relationships.
            </p>
          </div>
          <div class="pillar-card">
            <h3>Our Approach</h3>
            <p>
              We serve as an innovation hub, focusing on sustainable investment, tailored
              strategies, and facilitating global expansion.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Philosophy Section -->
    <section class="page-section philosophy-bg">
      <div class="container philosophy-section">
        <div class="quote-mark">“</div>
        <p class="philosophy-text">
          At IIS Holding, we believe in fostering innovation, building strong partnerships, and
          delivering sustainable growth. Our philosophy is rooted in adaptability, forward-thinking
          strategies, and a commitment to excellence in every venture we undertake.
        </p>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="page-section">
      <div class="container">
        <h2 class="section-title">Our Leadership</h2>
        <div class="leadership-container">
          <!-- Profile Card 1 -->
          <div class="profile-card">
            <img
              src="@/assets/chairman.png"
              alt="Portrait of H.E. Sheikh Abdulla Bin Ali Bin Jabor Al Thani"
              class="profile-image"
            />
            <div class="profile-info">
              <h3>H.E. Sheikh Abdulla Bin Ali Bin Jabor Al Thani</h3>
              <h4 class="gold-text">Chairman</h4>
              <p>
                A highly respected businessman with significant interests in banking, financial
                services, hospitality, and real estate, H.E. Sheikh Abdulla serves as the Chairman
                of the Commercial Bank of Qatar Group (CBQ Group) and Deputy Chairman of the
                National Bank of Oman (NBO). His leadership and vision are instrumental in driving
                Qatar’s economic prosperity and investment potential.
              </p>
            </div>
          </div>
          <!-- Profile Card 2 -->
          <div class="profile-card">
            <img
              src="@/assets/director.png"
              alt="Portrait of H.E. Sheikh Jabor Bin Ali Bin Jabor Al Thani"
              class="profile-image"
            />
            <div class="profile-info">
              <h3>H.E. Sheikh Jabor Bin Ali Bin Jabor Al Thani</h3>
              <h4 class="gold-text">Director</h4>
              <p>
                With expertise in municipal land management and financial services, H.E. Sheikh
                Jabor has played a pivotal role in shaping successful business initiatives and
                fostering economic growth.
              </p>
            </div>
          </div>
          <!-- Profile Card 3 -->
          <div class="profile-card">
            <img src="@/assets/ceo.png" alt="Portrait of Mr. Adnan Jawad" class="profile-image" />
            <div class="profile-info">
              <h3>Mr. Adnan Jawad</h3>
              <h4 class="gold-text">Chief Executive Officer</h4>
              <p>
                As CEO and Managing Partner of IIS Holding, Mr. Adnan Jawad brings over 20 years of
                experience in international business development. His expertise in business
                intelligence, data analysis, and regional geopolitics enables IIS to create
                high-value, sustainable ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* GENERAL STYLING */
.page-section {
  padding: 80px 20px;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
.grey-bg {
  background-color: #f8f8f8;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.section-title {
  text-align: center;
  font-size: 2.8em;
  font-weight: 700;
  margin-bottom: 60px;
  color: #00234b;
}
.gold-text {
  color: #b58e3e;
}

/* INTRO SECTION */
.intro-text {
  text-align: center;
  font-size: 1.2em;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* THE FIX: Styling for the new button */
.cta-button {
  margin-top: 40px; /* Adds professional spacing between the text and the button */
  display: inline-block; /* Needed for margin to apply correctly */
}
.btn-gold {
  background-color: var(--color-accent); /* Gold */
  color: white;
  padding: 15px 35px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  font-family: var(--font-body);
  font-size: 1em;
}

/* VISION & MISSION */
.vision-mission-bg {
  background-color: #00234b;
  color: #fff;
}
.vision-mission-container {
  display: flex;
  gap: 60px;
}
.vm-column {
  flex: 1;
  text-align: center;
}
.vm-column h2 {
  color: #fff;
  font-size: 2.2em;
  margin-bottom: 15px;
}
.vm-column p {
  font-size: 1.1em;
  opacity: 0.9;
}

/* CORE PILLARS */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.pillar-card {
  background-color: #f8f8f8;
  padding: 40px;
  border-radius: 8px;
  text-align: center;
}
.pillar-card h3 {
  font-size: 1.6em;
  margin-bottom: 15px;
}

/* PHILOSOPHY SECTION */
.philosophy-bg {
  background-color: var(--color-primary);
}
.philosophy-section {
  text-align: center;
}
.quote-mark {
  font-family: var(--font-heading);
  font-size: 6em;
  color: var(--color-accent);
  line-height: 1;
  margin-bottom: 20px;
}
.philosophy-text {
  font-family: var(--font-heading);
  font-size: 1.8em;
  font-style: italic;
  color: rgba(255, 255, 255, 0.9);
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.6;
}

/* LEADERSHIP SECTION - THE FIX */
.leadership-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.profile-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
}
.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 20px auto;
  border: 4px solid var(--color-accent);
}
.profile-info {
  flex-grow: 1; /* This is still needed for a fallback */
}
.profile-info h3 {
  font-size: 1.6em;
  margin-bottom: 10px; /* Increased margin */
  height: 5.5em; /* <-- THIS IS THE KEY FIX: Reserves a fixed height for all names */
  display: flex; /* Added for vertical centering of the name text */
  align-items: center; /* Aligns name text vertically in the middle of its box */
  justify-content: center; /* Aligns name text horizontally */
}
.profile-info h4 {
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 20px; /* Increased margin */
}
.profile-info p {
  font-size: 0.9em;
  line-height: 1.5;
}
@media (max-width: 768px) {
  /* This was already in main.css, but adding it here ensures it works */
  .leadership-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .pillars-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  /* Make the philosophy text a bit smaller on mobile */
  .philosophy-text {
    font-size: 1.5em;
  }

  /* This was also in main.css, but being explicit here is safer */
  .vision-mission-container {
    flex-direction: column;
    gap: 30px;
  }
}
</style>
