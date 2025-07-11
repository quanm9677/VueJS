<template>
  <div style="max-width: 600px; margin: 0 auto">
    <h1>📊 Quản lý Chi tiêu Cá nhân</h1>
    <CategoryFilter :categories="categories" v-model:category="selectedCategory" />
    <ExpenseForm @submit="addExpense" />
    <h3>Tổng chi tiêu: {{ totalAmount.toLocaleString() }}₫</h3>
    <ExpenseList :expenses="filteredExpenses" @delete="deleteExpense" />
  </div>
</template>

<script>
import ExpenseForm from './components/ExpenseForm.vue'
import ExpenseList from './components/ExpenseList.vue'
import CategoryFilter from './components/CategoryFilter.vue'

export default {
  components: { ExpenseForm, ExpenseList, CategoryFilter },
  data() {
    return {
      expenses: [],
      categories: ['Food', 'Transport', 'Entertainment'],
      selectedCategory: ''
    }
  },
  computed: {
    filteredExpenses() {
      if (!this.selectedCategory) return this.expenses;
      return this.expenses.filter(e => e.category === this.selectedCategory);
    },
    totalAmount() {
      return this.filteredExpenses.reduce((sum, e) => sum + e.amount, 0);
    }
  },
  methods: {
    addExpense(expense) {
      this.expenses.push(expense);
    },
    deleteExpense(id) {
      this.expenses = this.expenses.filter(e => e.id !== id);
    },
    loadFromStorage() {
      const data = localStorage.getItem('expenses');
      if (data) this.expenses = JSON.parse(data);
    }
  },
  watch: {
    expenses: {
      handler(val) {
        localStorage.setItem('expenses', JSON.stringify(val));
      },
      deep: true
    }
  },
  mounted() {
    this.loadFromStorage();
  }
}
</script>
