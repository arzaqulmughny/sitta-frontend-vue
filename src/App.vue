<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="page">
    <Navbar />
    <RouterView />
  </div>

</template>

<style src="/src/styles/global.css"></style>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

@media screen and (min-width: 700px) {
  .page {
    flex-direction: row;
  }
}
</style>
