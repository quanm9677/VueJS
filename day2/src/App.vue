<template>
  <AppNavbar />
  <div class="max-w-xl mx-auto p-4">
    <FilterTabs
      :activeFilter="filter"
      @change-filter="filter = $event"
      class="mb-4"
    />
    <div class="text-right mb-4">
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        @click="editing = { name: '', quantity: 1, purchased: false }"
      >
        ➕ Thêm mặt hàng
      </button>
    </div>

    <keep-alive>
      <component
        :is="currentView"
        v-bind="componentProps"
        @submit="handleSubmit"
        @toggle="toggleItem"
        @edit="editItem"
        @delete="deleteItem"
        class="bg-white p-4 rounded shadow"
      >
        <template #default>
          <h2 class="text-xl font-bold mb-3 text-blue-600">🛒 Shopping List</h2>
        </template>
        <template #empty>
          <p class="text-gray-500 italic">No items in list</p>
        </template>
      </component>
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import AppNavbar from './components/AppNavbar.vue'
import ItemForm from './components/ItemForm.vue'
import ItemList from './components/ItemList.vue'
import FilterTabs from './components/FilterTabs.vue'

const items = ref([])
const filter = ref('all')
const editing = ref(null)

const currentView = computed(() => editing.value ? ItemForm : ItemList)

const filteredItems = computed(() => {
  if (filter.value === 'purchased') return items.value.filter(i => i.purchased)
  if (filter.value === 'not-purchased') return items.value.filter(i => !i.purchased)
  return items.value
})

const componentProps = computed(() =>
  editing.value ? { initialData: editing.value } : { items: filteredItems.value }
)

onMounted(() => {
  const saved = localStorage.getItem('shopping-items')
  if (saved) items.value = JSON.parse(saved)
})

watch(items, (newVal) => {
  localStorage.setItem('shopping-items', JSON.stringify(newVal))
}, { deep: true })

function handleSubmit(item) {
  if (editing.value && editing.value.id) {
    const idx = items.value.findIndex(i => i.id === editing.value.id)
    items.value[idx] = { ...editing.value, ...item }
  } else {
    items.value.push({ ...item, id: Date.now() })
  }
  editing.value = null
}

function toggleItem(id) {
  const item = items.value.find(i => i.id === id)
  if (item) item.purchased = !item.purchased
}

function editItem(item) {
  editing.value = { ...item }
}

function deleteItem(id) {
  items.value = items.value.filter(i => i.id !== id)
}
</script>
