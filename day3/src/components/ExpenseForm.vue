<template>
  <form @submit.prevent="submitForm" class="expense-form">
    <input type="text" v-model="form.name" placeholder="Tên khoản chi" @keyup.enter="submitForm" />
    <span v-if="errors.name" class="text-red-500">{{ errors.name }}</span>

    <input type="number" v-model.number="form.amount" placeholder="Số tiền" />
    <span v-if="errors.amount" class="text-red-500">{{ errors.amount }}</span>
    <span v-if="form.amount > 1000000" class="text-red-500">⚠️ Quá giới hạn!</span>

    <select v-model="form.category">
      <option disabled value="">--Chọn danh mục--</option>
      <option>Food</option>
      <option>Transport</option>
      <option>Entertainment</option>
    </select>
    <span v-if="errors.category" class="text-red-500">{{ errors.category }}</span>

    <input type="date" v-model="form.date" />
    <span v-if="errors.date" class="text-red-500">{{ errors.date }}</span>

    <button :disabled="hasErrors" @click.stop>Thêm</button>
  </form>
</template>

<script>
export default {
  emits: ['submit'],
  data() {
    return {
      form: { name: '', amount: null, category: '', date: '' },
      errors: {}
    }
  },
  computed: {
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
  },
  watch: {
    'form.amount'(val) {
      if (val > 1000000) {
        console.warn("Chi tiêu lớn hơn 1 triệu!");
      }
    }
  },
  methods: {
    validate() {
      this.errors = {};
      if (!this.form.name || this.form.name.length < 3) {
        this.errors.name = "Tên ít nhất 3 ký tự";
      }
      if (!this.form.amount || this.form.amount <= 0) {
        this.errors.amount = "Số tiền phải > 0";
      }
      if (!this.form.category) {
        this.errors.category = "Chọn danh mục";
      }
      if (!this.form.date || new Date(this.form.date) > new Date()) {
        this.errors.date = "Ngày không hợp lệ";
      }
    },
    submitForm() {
      this.validate();
      if (!this.hasErrors) {
        this.$emit('submit', { ...this.form, id: Date.now() });
        this.form = { name: '', amount: null, category: '', date: '' };
      }
    }
  }
}
</script>

<style scoped>
.expense-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}
.text-red-500 {
  color: red;
  font-size: 0.8em;
}
</style>
