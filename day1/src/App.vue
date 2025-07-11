<template>
  <div id="app">
    <h1>📝 Danh sách công việc</h1>

    <!-- Bộ lọc -->
    <div class="filters">
      <button @click="filter = 'all'" :class="{ active: filter === 'all' }">Tất cả</button>
      <button @click="filter = 'completed'" :class="{ active: filter === 'completed' }">Hoàn thành</button>
      <button @click="filter = 'incomplete'" :class="{ active: filter === 'incomplete' }">Chưa hoàn thành</button>
    </div>

    <TaskForm @add="addTask" />

    <ul>
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </ul>

    <p>Còn {{ remaining }} công việc chưa hoàn thành.</p>
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue';
import TaskItem from './components/TaskItem.vue';

export default {
  components: { TaskForm, TaskItem },
  data() {
    return {
      tasks: [],
      filter: 'all' // 'all' | 'completed' | 'incomplete'
    };
  },
  computed: {
    filteredTasks() {
      if (this.filter === 'completed') {
        return this.tasks.filter(t => t.completed);
      } else if (this.filter === 'incomplete') {
        return this.tasks.filter(t => !t.completed);
      }
      return this.tasks;
    },
    remaining() {
      return this.tasks.filter(t => !t.completed).length;
    }
  },
  methods: {
    addTask(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        completed: false
      });
    },
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) task.completed = !task.completed;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    }
  },
  mounted() {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      this.tasks = JSON.parse(saved);
    }
  },
  watch: {
    tasks: {
      handler(updatedTasks) {
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      },
      deep: true
    }
  }
};
</script>

<style>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
  font-family: sans-serif;
}

ul {
  list-style: none;
  padding: 0;
}

.filters {
  margin-bottom: 16px;
}

.filters button {
  margin-right: 8px;
  padding: 6px 12px;
  border: none;
  background: #eee;
  cursor: pointer;
  border-radius: 4px;
}

.filters button.active {
  background: #007bff;
  color: white;
}
</style>
