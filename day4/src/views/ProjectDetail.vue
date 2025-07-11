<template>
  <div>
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <button @click="goToTasks">View Tasks</button>
    <button @click="editProject">Edit Project</button>
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const project = ref({})

onMounted(() => {
  const id = route.params.id
  const projects = JSON.parse(localStorage.getItem('projects')) || []
  project.value = projects.find(p => p.id == id) || {}
})

function goToTasks() {
  router.push(`/projects/${route.params.id}/tasks`)
}

function editProject() {
  router.push(`/projects/${route.params.id}/edit`)
}
</script>
