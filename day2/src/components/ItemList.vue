<template>
  <div>
    <slot></slot>
    <div v-if="!items.length">
      <slot name="empty">No items available</slot>
    </div>
    <ShoppingItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @toggle="$emit('toggle', $event)"
      @edit="$emit('edit', $event)"
      @delete="$emit('delete', $event)"
    />
  </div>
</template>

<script setup>
import ShoppingItem from './ShoppingItem.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
