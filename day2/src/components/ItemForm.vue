<template>
  <form @submit.prevent="onSubmit" class="flex gap-2 mb-4 items-end">
    <div class="flex flex-col flex-1">
      <label class="text-sm mb-1">Tên mặt hàng</label>
      <input
        v-model="form.name"
        type="text"
        class="border p-2 rounded"
        placeholder="VD: Sữa, Gạo..."
        required
      />
    </div>

    <div class="flex flex-col w-24">
      <label class="text-sm mb-1">Số lượng</label>
      <input
        v-model.number="form.quantity"
        type="number"
        min="1"
        class="border p-2 rounded"
        required
      />
    </div>

    <button
      type="submit"
      class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
      {{ form.id ? "Cập nhật" : "Thêm" }}
    </button>
  </form>
</template>

<script setup>
import { reactive,  watch } from 'vue'

// ✅ defineProps với fallback nếu không truyền
const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({ name: '', quantity: 1, purchased: false })
  }
})

const emit = defineEmits(['submit'])

// ✅ Tạo bản sao reactive từ props
const form = reactive({ ...props.initialData })

watch(() => props.initialData, (newVal) => {
  Object.assign(form, newVal)
})

function onSubmit() {
  if (!form.name || form.quantity < 1) return
  emit('submit', { ...form })
}
</script>
