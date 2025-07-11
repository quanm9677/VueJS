<script setup>
defineOptions({
  name: 'AppNavbar' 
})
</script>
<template>
  <nav style="display: flex; gap: 16px; padding: 16px; background: #1976d2; color: white;">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/projects/new">Add Project</router-link>
  </nav>
</template>
