<template>
  <div class="max-w-md mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4 text-center">Quản lý Công việc</h1>
    <TaskForm @submit="addTask" />
    <TaskList
      :tasks="tasks"
      @toggle="toggleTask"
      @delete="deleteTask"
    />
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default {
  components: {
    TaskForm,
    TaskList
  },
  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    const stored = localStorage.getItem('tasks');
    if (stored) this.tasks = JSON.parse(stored);
  },
  watch: {
    tasks: {
      handler(newTasks) {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
      },
      deep: true
    }
  },
  methods: {
    addTask(title) {
  // Nếu title không phải là string, bỏ qua
  if (typeof title !== 'string') return;
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  this.tasks.push(newTask);
},
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) task.completed = !task.completed;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    }
  }
};
</script>

<style>
/* Global styles */
</style>