<script setup>
import PageBanner from '@/components/PageBanner.vue'
import aboutBannerImage from '@/assets/about-banner.jpeg'
</script>

<template>
  <div class="about-page">
    <PageBanner title="Who We Are" :background-image="aboutBannerImage" />

    <!-- Company Story Section -->
    <section class="page-section">
      <p class="intro-text">
        IIS Holding was established in 2011 in the State of Qatar to develop sustainable businesses
        focused on niche opportunities and innovative technologies. We are a local firm with a
        global vision, owned by a branch of the Qatar Royal family, established to partner, support
        and invest locally and globally.
      </p>
    </section>

    <!-- Vision & Mission Section -->
    <section class="page-section grey-bg">
      <div class="vision-mission-container">
        <div class="vm-column">
          <h2>Our Mission</h2>
          <p>
            To develop high value, innovative and sustainable businesses with local and
            international partners. It is an innovation hub within the context of mature banking,
            real estate and service businesses.
          </p>
        </div>
        <div class="vm-column">
          <h2>Our Vision</h2>
          <p>
            To develop innovative healthcare and wellness products and services aligned with the
            Qatar National Vision, focusing on niche services and technology that address healthcare
            quality and societal needs.
          </p>
        </div>
      </div>
    </section>

    <!-- Leadership Section -->
    <section class="page-section">
      <h2 class="section-title">Our Leadership</h2>
      <div class="leadership-container">
        <!-- We will create a component for these profiles later if needed, for now this is fine -->
        <div class="profile-card">
          <img
            src="@/assets/leader-placeholder.png"
            alt="H.E. Shk Abdulla Bin Ali Bin Jabor Al Thani"
          />
          <h3>H.E. Al Thani</h3>
          <h4 class="gold-text">Chairman</h4>
          <p>
            A highly respected businessman with significant interests in banking, financial
            services, hospitality and real-estate. Serves as the Chairman of Commercial Bank of
            Qatar, Group (“CBQ Group”), and Deputy Chairman of National Bank of Oman (“NBO”).
          </p>
        </div>
        <div class="profile-card">
          <img
            src="@/assets/leader-placeholder.png"
            alt="H.E. Shk Jabor Bin Ali Bin Jabor Al Thani"
          />
          <h3>H.E. Al Thani</h3>
          <h4 class="gold-text">Director</h4>
          <p>
            A Director of the Commercial Bank of Qatar where he provides key stewardship in setting
            company policy. Alongside his success in the banking world, he has extensive experience
            in investment and real estate.
          </p>
        </div>
        <div class="profile-card">
          <img src="@/assets/leader-adnan.png" alt="Adnan Jawad" />
          <h3>Gerry</h3>
          <h4 class="gold-text">Chief Executive Officer</h4>
          <p>
            The CEO and Managing Partner of IIS. With over 20 years of experience, Mr. Adnan is a
            highly respected strategic advisor and serial entrepreneur with a focus on bringing
            together global expertise with regional insight.
          </p>
        </div>
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
.intro-text {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  font-size: 1.2em;
  line-height: 1.7;
}
.vision-mission-container {
  display: flex;
  justify-content: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}
.vm-column {
  flex-basis: 45%;
  text-align: center;
}
.vm-column h2 {
  font-size: 2em;
  color: #00234b;
}
.section-title {
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 50px;
  color: #00234b;
}
.leadership-container {
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
}
.profile-card {
  flex-basis: 30%;
}
.profile-card img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
.profile-card h3 {
  color: #00234b;
}
.profile-card h4 {
  margin-top: -10px;
  font-weight: 500;
}
.gold-text {
  color: #b58e3e;
}
</style>
