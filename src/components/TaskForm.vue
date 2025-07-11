<template>
  <form @submit.prevent="onSubmit">
    <input v-model="title" placeholder="Thêm công việc mới" />
    <button type="submit">Thêm</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        this.$emit('add', this.title.trim());
        this.title = '';
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}
input {
  flex: 1;
}
</style>
