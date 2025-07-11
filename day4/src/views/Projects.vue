<template>
  <div>
    <h2>All Projects</h2>
    <ProjectItem
      v-for="project in projects"
      :key="project.id"
      :project="project"
      @delete="deleteProject"
      @view="viewProject"
    />
  </div>
</template>

<script setup>
import ProjectItem from '../components/ProjectItem.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router' 

const router = useRouter()

const projects = ref([])

onMounted(() => {
  projects.value = JSON.parse(localStorage.getItem('projects')) || []
})

function deleteProject(id) {
  projects.value = projects.value.filter(p => p.id !== id)
  localStorage.setItem('projects', JSON.stringify(projects.value))
}

function viewProject(id) {
  router.push({ name: 'project-detail', params: { id } })
}
</script>

