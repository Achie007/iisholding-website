<template>
  <section class="hero">
    <div class="hero-content">
      <h1>{{ $t('hero.title') }}</h1>
      <p>{{ $t('hero.subtitle') }}</p>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this component
</script>

<style scoped>
.hero {
  height: 600px;
  background-image: url('@/assets/hero-background.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.hero-content {
  /* THIS IS THE FIX: Alpha value changed from 0.85 to 0.7 */
  background-color: rgba(255, 255, 255, 0.452);
  padding: 40px 60px;
  border-radius: 5px;
  max-width: 800px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); /* Added a subtle shadow for depth */
}
.hero-content h1 {
  font-size: 3.5em;
  font-weight: 300;
  margin: 0;
  color: #00234b;
}
.hero-content p {
  font-size: 1.2em;
  margin-top: 10px;
  color: #333;
}
</style>
