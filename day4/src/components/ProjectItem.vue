<template>
  <div style="padding: 8px; border-bottom: 1px solid #ddd; display: flex; justify-content: space-between;">
    <div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
    </div>
    <div>
      <button @click="$emit('view', project.id)">View</button>
      <button @click="$emit('delete', project.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['project'])
</script>
