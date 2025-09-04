<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="banner" :style="{ backgroundImage: `url(${backgroundImage})` }">
    <div class="banner-overlay">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>

<style scoped>
.banner {
  height: 350px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}
.banner-overlay {
  background-color: rgba(0, 35, 75, 0.7);
  padding: 30px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner h1 {
  font-size: 3em;
  font-weight: 600;
  margin: 0;
  color: #fff;
}
</style>
