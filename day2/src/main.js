import { createApp } from 'vue';
import App from './App.vue';
import AppNavbar from './components/AppNavbar.vue';
import './assets/tailwind.css';

const app = createApp(App);
app.component('AppNavbar', AppNavbar); // ✅ Global registration (đã đổi tên)
app.mount('#app');
