<template>
  <li :class="{ completed: task.completed }">
    <label>
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle', task.id)" />
      {{ task.title }}
    </label>
    <button @click="$emit('delete', task.id)">❌</button>
  </li>
</template>

<script>
export default {
  props: {
    task: Object
  }
};
</script>

<style scoped>
li {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
.completed {
  text-decoration: line-through;
  color: #888;
}
</style>
