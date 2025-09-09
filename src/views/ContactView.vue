<script setup>
import PageBanner from '@/components/PageBanner.vue'
import contactBannerImage from '@/assets/contact-banner.jpeg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function handleSubmit() {
  // In a real application, this method would handle the form submission,
  // e.g., sending the data to an API. For now, we'll just log it.
  alert(t('contact_page.alert_message'))
}
</script>

<template>
  <div class="contact-page">
    <PageBanner :title="$t('contact_page.banner_title')" :background-image="contactBannerImage" />

    <!-- Contact Section -->
    <section class="page-section">
      <div class="contact-container">
        <!-- Left Column: Details -->
        <div class="contact-details">
          <h2>{{ $t('contact_page.get_in_touch') }}</h2>
          <p>
            {{ $t('contact_page.intro_paragraph') }}
          </p>
          <div class="info-group">
            <h4>{{ $t('contact_page.address_label') }}</h4>
            <p>{{ $t('footer.address') }}</p>
          </div>
          <div class="info-group">
            <h4>{{ $t('contact_page.telephone_label') }}</h4>
            <p>
              <span dir="ltr">{{ $t('contact_page.telephone_number') }}</span>
            </p>
          </div>
          <div class="info-group">
            <h4>{{ $t('contact_page.email_label') }}</h4>
            <p>info@iisholding.com</p>
          </div>
        </div>

        <!-- Right Column: Form -->
        <div class="contact-form">
          <form @submit.prevent="handleSubmit">
            <input type="text" :placeholder="$t('contact_page.form_name')" required />
            <input type="email" :placeholder="$t('contact_page.form_email')" required />
            <input type="text" :placeholder="$t('contact_page.form_subject')" required />
            <textarea :placeholder="$t('contact_page.form_message')" rows="6" required></textarea>
            <button type="submit" class="btn-gold">{{ $t('contact_page.form_button') }}</button>
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
