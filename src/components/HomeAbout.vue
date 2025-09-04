<template>
  <section class="about-intro">
    <h2>{{ $t('home_about.title') }}</h2>
    <p>{{ $t('home_about.description') }}</p>
    <RouterLink to="/about" class="btn-gold">{{ $t('home_about.button') }}</RouterLink>
  </section>
</template>

<style scoped>
.about-intro {
  padding: 80px 50px;
  text-align: center;
  background-color: #fff;
}
.about-intro h2 {
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 20px;
  color: #00234b;
}
.about-intro p {
  max-width: 800px;
  margin: 0 auto 30px auto;
  font-size: 1.1em;
  line-height: 1.6;
}
.btn-gold {
  background-color: #b58e3e;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
}
</style>
