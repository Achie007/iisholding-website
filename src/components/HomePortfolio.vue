<template>
  <section class="portfolio-spotlight">
    <h2>{{ $t('home_portfolio.title') }}</h2>
    <div class="portfolio-grid">
      <div class="project-card">
        <h3 class="gold-text">The Diabetes Hospital</h3>
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
        <h3 class="gold-text">Abdulla Bin Ali & Partners for Real Estate Investments</h3>
        <p>
          A leading real estate company in The Pearl Qatar, specializing in development, leasing,
          and property management.
        </p>
      </div>
    </div>
    <RouterLink to="/portfolio" class="btn-dark">{{ $t('home_portfolio.button') }}</RouterLink>
  </section>
</template>

<style scoped>
.portfolio-spotlight {
  padding: 80px 50px;
  text-align: center;
  background-color: #f8f8f8;
}
.portfolio-spotlight h2 {
  font-size: 2.5em;
  font-weight: 600;
  margin-bottom: 50px;
  color: #00234b;
}
.portfolio-grid {
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}
.project-card {
  flex-basis: 300px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
}
.gold-text {
  color: #b58e3e;
}
.btn-dark {
  background-color: #00234b;
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
  margin-top: 50px;
}
</style>
