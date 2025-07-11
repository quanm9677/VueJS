<template>
  <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
    <input v-model="title" placeholder="Title" />
    <textarea v-model="description" placeholder="Description"></textarea>
    <button @click="submitForm">Save</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const title = ref('')
const description = ref('')
const id = route.params.id

onMounted(() => {
  if (id) {
    const projects = JSON.parse(localStorage.getItem('projects')) || []
    const project = projects.find(p => p.id == id)
    if (project) {
      title.value = project.title
      description.value = project.description
    }
  }
})

function submitForm() {
  const projects = JSON.parse(localStorage.getItem('projects')) || []
  if (id) {
    const index = projects.findIndex(p => p.id == id)
    projects[index] = { ...projects[index], title: title.value, description: description.value }
  } else {
    const newProject = {
      id: Date.now().toString(),
      title: title.value,
      description: description.value,
      tasks: []
    }
    projects.push(newProject)
  }
  localStorage.setItem('projects', JSON.stringify(projects))
  router.push('/projects')
}
</script>
