<template>
  <div class="flex gap-2 mb-4">
    <button v-for="tab in tabs" :key="tab" :class="tab === activeFilter ? 'font-bold border-b-2 border-blue-500' : ''"
      @click="$emit('change-filter', tab)">{{ tabLabels[tab] }}</button>
  </div>
</template>

<script setup>
defineProps({
  activeFilter: String
})

const tabs = ['all', 'purchased', 'not-purchased']
const tabLabels = {
  all: 'Tất cả',
  purchased: 'Đã mua',
  'not-purchased': 'Chưa mua'
}
</script>
