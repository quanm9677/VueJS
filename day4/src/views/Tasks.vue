<template>
  <div style="padding: 8px;">
    <h3>Tasks for Project {{ id }}</h3>
    <TaskList :tasks="tasks" />
  </div>
</template>

<script setup>
import TaskList from '../components/TaskList.vue'
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()
const id = route.params.id
const tasks = ref([])

onMounted(() => {
  const projects = JSON.parse(localStorage.getItem('projects')) || []
  const project = projects.find(p => p.id == id)
  tasks.value = project?.tasks || []
})
</script>
