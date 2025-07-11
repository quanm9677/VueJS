<template>
  <div style="margin-bottom: 16px">
    <select v-model="selected" @change="$emit('update:category', selected)">
      <option value="">Tất cả</option>
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['categories', 'selectedCategory'],
  data() {
    return { selected: this.selectedCategory }
  },
  watch: {
    selectedCategory(val) {
      this.selected = val;
    }
  }
}
</script>
