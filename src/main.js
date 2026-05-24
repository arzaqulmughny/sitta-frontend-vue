import { createApp } from 'vue'
import App from './App.vue'
import Inventory from './pages/Inventory.vue';
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import Index from './pages/Index.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/inventory', component: Inventory }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount("#app");
