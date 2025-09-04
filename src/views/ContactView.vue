<script setup>
import PageBanner from '@/components/PageBanner.vue'
import contactBannerImage from '@/assets/contact-banner.jpeg'
</script>

<template>
  <div class="contact-page">
    <PageBanner title="Contact Us" :background-image="contactBannerImage" />

    <!-- Contact Section -->
    <section class="page-section">
      <div class="contact-container">
        <!-- Left Column: Details -->
        <div class="contact-details">
          <h2>Get In Touch</h2>
          <p>
            We welcome inquiries from potential partners and clients. Please use the form to contact
            us, or reach out directly via the information below.
          </p>
          <div class="info-group">
            <h4>Address:</h4>
            <p>P.O. Box 14731, Doha, Qatar</p>
          </div>
          <div class="info-group">
            <h4>Telephone:</h4>
            <p>+974 4434 2271</p>
          </div>
          <div class="info-group">
            <h4>Email:</h4>
            <p>info@iisholding.com</p>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" class="btn-gold">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="page-section grey-bg">
      <div class="map-container">
        <img src="@/assets/map.png" alt="Map of Doha" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      // In a real application, this method would handle the form submission,
      // e.g., sending the data to an API. For now, we'll just log it.
      alert('Thank you for your message! (Form submission is for demo purposes)')
    },
  },
}
</script>

<style scoped>
.page-section {
  padding: 80px 50px;
}
.contact-container {
  display: flex;
  justify-content: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-details {
  flex-basis: 40%;
}
.contact-details h2 {
  color: #00234b;
}
.info-group {
  margin-top: 20px;
}
.info-group h4 {
  margin-bottom: 5px;
  color: #00234b;
}
.info-group p {
  margin: 0;
}
.contact-form {
  flex-basis: 45%;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  font-size: 1em;
  font-family: inherit;
}
.btn-gold {
  background-color: #b58e3e;
  color: white;
  padding: 15px 40px;
  text-decoration: none;
  font-weight: bold;
  border: none;
  font-size: 1em;
  cursor: pointer;
  width: 100%;
}
.map-container {
  /* We now limit the width to something more appropriate for a tall image */
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.map-container img {
  width: 100%;
  height: auto;
  display: block; /* Removes any extra space below the image */
}
</style>
