<script setup>
import { ref } from 'vue';

    let expand = ref(false);
</script>

<template>
    <nav class="navbar">
        <div class="navbar-logo">
            <img src="/assets/images/Universitas Terbuka.png" alt="">
            <div class="navbar-logo-text">
                <p>SITTA</p>
                <p>Bahan Ajar Digital</p>
            </div>
        </div>

        <ul id="navbar-menu" :class="expand ? 'navbar-menu--active' : ''" class="navbar-menu">
            <li>
                <RouterLink to="/" class="navbar-links">
                    <svg class="navbar-links__icon" xmlns="http://www.w3.org/2000/svg" height="24px"
                        viewBox="0 -960 960 960" width="24px" fill="#currentColor">
                        <path
                            d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Z" />
                    </svg>
                    <p>Dashboard</p>
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/tracking" class="navbar-links">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="currentColor">
                        <path
                            d="M155-195q-35-35-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35q-50 0-85-35Zm113.5-56.5Q280-263 280-280t-11.5-28.5Q257-320 240-320t-28.5 11.5Q200-297 200-280t11.5 28.5Q223-240 240-240t28.5-11.5Zm480 0Q760-263 760-280t-11.5-28.5Q737-320 720-320t-28.5 11.5Q680-297 680-280t11.5 28.5Q703-240 720-240t28.5-11.5ZM680-440h170l-90-120h-80v120Z" />
                    </svg>
                    <p>Tracking Pengiriman</p>
                </RouterLink>
            </li>

            <li>
                <RouterLink to="/inventory" class="navbar-links">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="currentColor">
                        <path
                            d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm-40-600h640v-120H160v120Zm200 280h240v-80H360v80Z" />
                    </svg>
                    <p>Informasi Stok</p>
                </RouterLink>
            </li>

            <li>
                <a href="/logout" class="navbar-links" onclick="return confirm('Apakah anda yakin ingin logout?')">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="currentColor">
                        <path
                            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                    </svg>
                    <p>Logout</p>
                </a>
            </li>
        </ul>

        <button id="navbar-toggle" class="navbar-toggle" @click="expand = !expand">
            <svg class="navbar-toggle__icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                width="24px" fill="currentColor">
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
        </button>
    </nav>
</template>

<style scoped src="/src/styles/navbar.css"></style>