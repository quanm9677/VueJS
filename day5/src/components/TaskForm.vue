<template>
  <form @submit.prevent="submitTask" class="flex gap-2 mb-4 animate__animated animate__bounceIn">
    <input
      v-model="title"
      class="w-full p-2 border rounded"
      placeholder="Nhập công việc"
    />
    <button
      :class="{
        'bg-blue-500 text-white': isValid,
        'bg-gray-300 text-white': !isValid
      }"
      class="p-2 rounded hover:bg-blue-600"
    >Thêm</button>
  </form>
</template>

<script>
export default {
  data() {
    return { title: '' };
  },
  computed: {
    isValid() {
      return this.title.trim().length > 0;
    }
  },
  methods: {
    submitTask() {
      if (!this.isValid) return;
      this.$emit('submit', this.title.trim());
      this.title = '';
    }
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
  border-color: #3182ce;
}
</style>