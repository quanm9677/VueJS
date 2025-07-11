import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectForm from '../views/ProjectForm.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import Tasks from '../views/Tasks.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  {
    path: '/projects/new',
    name: 'project-new',
    component: ProjectForm,
    beforeEnter: (to, from, next) => {
      const role = localStorage.getItem('role')
      if (role === 'admin') next()
      else next('/')
    }
  },
  {
    path: '/projects/:id',
    name: 'project-detail',
    component: ProjectDetail,
    children: [
      { path: 'tasks', component: Tasks },
      { path: 'edit', component: ProjectForm }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guard toàn cục
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated')
  if (to.path.startsWith('/projects') && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
