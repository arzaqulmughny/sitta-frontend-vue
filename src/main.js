import { createApp } from 'vue'
import App from './App.vue'
import Inventory from './pages/Inventory.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Index from './pages/Index.vue';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Tracking from './pages/Tracking.vue';

const routes = [
    { path: '/', component: Index },
    { path: '/inventory', component: Inventory },
    { path: '/tracking', component: Tracking }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.use(VueSweetalert2)
app.mount("#app");
