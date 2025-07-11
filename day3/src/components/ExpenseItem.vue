<template>
  <div class="expense-item">
    <div>
      <strong>{{ expense.name }}</strong> - {{ expense.amount.toLocaleString() }}₫
    </div>
    <div>{{ expense.category }} | {{ expense.date }}</div>
    <button @click.stop="$emit('delete', expense.id)">🗑️ Xóa</button>
  </div>
</template>

<script>
export default {
  props: ['expense']
}
</script>

<style scoped>
.expense-item {
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}
</style>
