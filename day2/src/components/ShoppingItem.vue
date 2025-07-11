<template>
  <div :class="{ 'line-through text-gray-500': item.purchased }" class="flex justify-between items-center p-2 border-b">
    <div class="flex items-center gap-2">
      <input type="checkbox" :checked="item.purchased" @change="$emit('toggle', item.id)" />
      <span>{{ item.name }} (x{{ item.quantity }})</span>
    </div>
    <div class="flex gap-2">
      <button @click="$emit('edit', item)">✏️</button>
      <button @click="$emit('delete', item.id)">🗑️</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
    validator: (val) => 'id' in val && 'name' in val && 'purchased' in val
  }
})
</script>
