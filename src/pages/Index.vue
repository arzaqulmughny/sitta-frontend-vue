<script setup lang="ts">
import AnnountcementItem from '@/components/AnnountcementItem.vue';
import CardAnalytics from '@/components/CardAnalytics.vue';
import OutlineBookOpen from '@/components/icons/OutlineBookOpen.vue';
import OutlineCheckCircle from '@/components/icons/OutlineCheckCircle.vue';
import OutlineDocument from '@/components/icons/OutlineDocument.vue';
import OutlineDocumentCheck from '@/components/icons/OutlineDocumentCheck.vue';
import OutlineInventory from '@/components/icons/OutlineInventory.vue';
import OutlineMagnifier from '@/components/icons/OutlineMagnifier.vue';
import OutlinePieTwenty from '@/components/icons/OutlinePieTwenty.vue';
import OutlinePlusCircle from '@/components/icons/OutlinePlusCircle.vue';
import OutlineStats from '@/components/icons/OutlineStats.vue';
import OutlineTruck from '@/components/icons/OutlineTruck.vue';
import MainMenuItem from '@/components/MainMenuItem.vue';
import Button from '@/ui/Button.vue';
import { onMounted } from 'vue';

onMounted(() => {
    document.title = 'Beranda - Sistem Tracking Bahan Ajar'
});
</script>

<template>
    <main class="main">
        <header class="header">
            <h1 class="h1 color-white">Selamat Datang, Arza!</h1>
            <p class="p color-white-darker">Ringkasan aktivitas distribusi bahan ajar hari ini. Semua sistem berjalan
                normal.</p>

            <div class="header-decoration">
                <OutlineInventory />
            </div>

            <div class="header-actions" style="margin-top: 32px;">
                <RouterLink to="/tracking">
                    <Button :icon="OutlineMagnifier">Cari Resi</Button>
                </RouterLink>

                <RouterLink to="/tracking">
                    <Button variant="white" :icon="OutlinePlusCircle">Input DO Baru</Button>
                </RouterLink>
            </div>
        </header>

        <ul class="card-analytic">
            <li>
                <CardAnalytics title="Total Pengiriman" value="1" :percentage="12" :icon="OutlineTruck" />
            </li>

            <li>
                <CardAnalytics title="Total DO" value="850" :icon="OutlineDocument" variant="red" />
            </li>

            <li>
                <CardAnalytics title="Pengiriman Diproses" value="512" :icon="OutlinePieTwenty" variant="green" />
            </li>

            <li>
                <CardAnalytics title="Pengiriman Selesai" value="1,020" :icon="OutlineCheckCircle" variant="yellow" />
            </li>
        </ul>

        <div class="cols-2">
            <section class="main-menu-section">
                <h2 class="h2 color-black">Menu Utama</h2>

                <ul class="main-menu">
                    <li>
                        <MainMenuItem title="Informasi Bahan Ajar" :icon="OutlineBookOpen"
                            description="Akses detail katalog, stok, dan spesifikasi bahan ajar digital." />
                    </li>

                    <li>
                        <MainMenuItem title="Tracking Pengiriman" :icon="OutlineTruck"
                            description="Lacak status logistik dan posisi armada pengiriman secara real-time." />
                    </li>

                    <li>
                        <MainMenuItem title="Monitoring Progress DO" :icon="OutlineDocumentCheck"
                            description="Pantau status Delivery Order dari persetujuan hingga selesai." />
                    </li>

                    <li>
                        <MainMenuItem title="Rekap Bahan Ajar" :icon="OutlineStats"
                            description="Laporan agregat dan statistik ketersediaan modul per wilayah." />
                    </li>
                </ul>
            </section>

            <section class="announcement-section">
                <div class="announcement-section-header">
                    <div class="announcement-section-header__left">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                            fill="#currentColor">
                            <path
                                d="M720-440v-80h160v80H720Zm48 280-128-96 48-64 128 96-48 64Zm-80-480-48-64 128-96 48 64-128 96ZM200-200v-160h-40q-33 0-56.5-23.5T80-440v-80q0-33 23.5-56.5T160-600h160l200-120v480L320-360h-40v160h-80Zm240-182v-196l-98 58H160v80h182l98 58Zm120 36v-268q27 24 43.5 58.5T620-480q0 41-16.5 75.5T560-346ZM300-480Z" />
                        </svg>
                        <h2 class="announcement-section-title">Pengumuman Terbaru</h2>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                        fill="#currentColor">
                        <path
                            d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
                    </svg>
                </div>

                <ul class="announcement-section-body">
                    <li>
                        <AnnountcementItem type="Sistem" time="Baru saja" title="Pemeliharaan Server Berkala" message="Akan dilakukan maintenance pada hari Sabtu, 24 Okt pukul 00:00 - 04:00 WIB. Layanan input DO akan jeda sementara." />
                    </li>
                </ul>
            </section>
        </div>
    </main>
</template>

<style scoped src="/src/styles/index.css"></style>