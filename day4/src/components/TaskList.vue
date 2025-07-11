<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
  </ul>
</template>

<script setup>
defineProps(['tasks'])
</script>
