<template>
  <section class="portfolio-spotlight">
    <h2>{{ $t('home_portfolio.title') }}</h2>
    <div class="portfolio-grid">
      <div class="project-card">
        <h3 class="gold-text">The Diabetes Hospital</h3>
        <p>
          A specialized center to treat and manage diabetes complications, scheduled to open in 2024
          and featuring the first diabetic limb salvage unit in the Middle East.
        </p>
      </div>
      <div class="project-card">
        <h3 class="gold-text">PatientSource - UK</h3>
        <p>
          A leading healthcare technology provider with a cloud-based electronic patient record
          (EPR) system designed to streamline workflows and improve patient outcomes.
        </p>
      </div>
      <div class="project-card">
        <h3 class="gold-text">Sanome - UK</h3>
        <p>
          A pioneering MedTech company revolutionizing personalized medicine through an advanced
          AI-powered Clinical Co-pilot for proactive health management.
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
  text-align: left;
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
