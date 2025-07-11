<template>
  <li
    class="flex justify-between items-center p-2 border-b hover:bg-gray-100 animate__animated animate__fadeIn"
    :class="{ 'line-through text-gray-500': task.completed }"
    :style="{ backgroundColor: task.completed ? '#f0f0f0' : 'white' }"
  >
    <div class="flex items-center">
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle')"
        class="mr-2"
      />
      {{ task.title }}
    </div>
    <button @click="$emit('delete')" class="text-red-500">X</button>
  </li>
</template>

<script>
export default {
  props: ['task']
};
</script>

<style scoped>
</style>