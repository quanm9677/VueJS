<template>
  <div style="max-width: 800px; margin: 0 auto;">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
