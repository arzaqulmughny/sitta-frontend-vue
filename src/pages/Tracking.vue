<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2'
import { findTrackingData, storeTrackingData } from '@/data/tracking';
import Button from '@/ui/Button.vue';
import OutlinePlusCircle from '@/components/icons/OutlinePlusCircle.vue';
import AddDeliveryOrderModal from '@/components/AddDeliveryOrderModal.vue';
import { columns } from "@/data/tracking"

// State
const number = ref(null)
const data = ref(null);
const openUpsertModal = ref(false);

// Method
const onSubmit = () => {
    if (!number.value || number.value.length == 0) {
        data.value = null
        return;
    }

    const result = findTrackingData(number.value);


    if (!result) {
        Swal.fire({
            title: 'Gagal',
            text: 'Data tidak ditemukan',
            icon: 'error',
            confirmButtonText: 'OK',
            timer: 3000,
            timerProgressBar: true,
        })

        data.value = null

        return;
    }

    result.number = number.value;

    Swal.fire({
        title: 'Berhasil',
        text: 'Data berhasil ditemukan',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 1000,
        timerProgressBar: true,
        showConfirmButton: false
    })

    data.value = result;
}

const onCloseUpsertModal = (payload = null) => {
    if (payload != null) {
        // Validate required columns
        const emptyColumns = [];
        Object.keys(payload).forEach((column) => {
            const isRequired = columns.find((column2) => column2.column === column)?.required
            if (isRequired) {
                if (payload[column] == null || payload[column] == '') {
                    emptyColumns.push(columns.find((column2) => column2.column === column)?.title)
                }
            }
        })

        if (emptyColumns.length > 0) {
            Swal.fire({
                title: 'Gagal',
                text: `Data berikut wajib diisi: ${emptyColumns.join(', ')}`,
                icon: 'error',
                confirmButtonText: 'OK'
            })
            return
        }
    }

    const newNumber = storeTrackingData(payload);

    Swal.fire({
        title: 'Berhasil',
        text: 'Data Pengiriman Berhasil Ditambahkan!',
        icon: 'success',
        confirmButtonText: 'OK'
    })

    openUpsertModal.value = false;
    number.value = newNumber;
    onSubmit();
}

</script>

<template>
    <main class="main">
        <div class="header">
            <div class="header__left">
                <h1 class="h1">Tracking Pengiriman</h1>
                <p class="p">Lacak status pengiriman dokumen dan paket akademik.</p>
            </div>

            <Button :icon="OutlinePlusCircle" @click="() => openUpsertModal = true">Tambah Pengiriman</Button>
        </div>

        <form class="input-waybill-section" @submit.prevent="onSubmit">
            <label class="input-waybill">
                <p class="input-waybill-label">Cari Berdasarkan Nomor Resi atau DO</p>
                <div class="input-waybill-inner">
                    <svg class="input-waybill-icon" xmlns="http://www.w3.org/2000/svg" height="24px"
                        viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path
                            d="M155-195q-35-35-35-85H40v-440q0-33 23.5-56.5T120-800h560v160h120l120 160v200h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85H360q0 50-35 85t-85 35q-50 0-85-35Zm113.5-56.5Q280-263 280-280t-11.5-28.5Q257-320 240-320t-28.5 11.5Q200-297 200-280t11.5 28.5Q223-240 240-240t28.5-11.5ZM120-360h32q17-18 39-29t49-11q27 0 49 11t39 29h272v-360H120v360Zm628.5 108.5Q760-263 760-280t-11.5-28.5Q737-320 720-320t-28.5 11.5Q680-297 680-280t11.5 28.5Q703-240 720-240t28.5-11.5ZM680-440h170l-90-120h-80v120ZM360-540Z" />
                    </svg>
                    <input class="input-waybill-input" type="text" placeholder="DO-123123" name="input-waybill-input"
                        v-model="number">
                </div>
            </label>

            <button type="submit" class="button-search">
                <svg class="button-search__icon" xmlns="http://www.w3.org/2000/svg" height="24px"
                    viewBox="0 -960 960 960" width="24px" fill="currentColor">
                    <path
                        d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
                <p>Cari</p>
            </button>
        </form>

        <div class="cols-2" id="result" v-if="data">
            <section class="result-section">
                <div class="result-header">
                    <div class="result-header__left">
                        <h2 class="result-title" v-text="data.number" />
                        <div class="result-subtitle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="currentColor">
                                <path
                                    d="M200-80q-33 0-56.5-23.5T120-160v-451q-18-11-29-28.5T80-680v-120q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v120q0 23-11 40.5T840-611v451q0 33-23.5 56.5T760-80H200Zm0-520v440h560v-440H200Zm-40-80h640v-120H160v120Zm200 280h240v-80H360v80Zm120 20Z" />
                            </svg>
                            <p v-text="data.paket" />
                        </div>
                    </div>

                    <p class="result-status" v-text="data.status" />
                </div>

                <div class="result-body">
                    <div class="result-object">
                        <h3 class="result-key">Nama Mahasiswa</h3>
                        <h3 class="result-detail" v-text="data.nama" />
                        <h3 class="result-detail" v-text="data.nim" />
                    </div>

                    <div class="result-object">
                        <h3 class="result-key">Ekspedisi</h3>
                        <h3 class="result-detail" v-text="data.ekspedisi" />
                    </div>

                    <div class="result-object">
                        <h3 class="result-key">Tanggal Pengiriman</h3>
                        <h3 class="result-detail" v-text="data.tanggalKirim" />
                    </div>

                    <div class="result-object">
                        <h3 class="result-key">Total</h3>
                        <h3 class="result-detail"
                            v-text="data.total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })" />
                    </div>
                </div>
            </section>

            <section class="result-section">
                <div class="result-header">
                    <div class="result-header__left">
                        <h2 class="result-title">Status Pengiriman</h2>
                    </div>
                </div>

                <div class="result-timeline">
                    <div class="timeline" v-for="timeline in data.perjalanan">
                        <div class="timeline-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                fill="currentColor">
                                <path
                                    d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
                            </svg>
                        </div>

                        <div class="timeline-text">
                            <h3 class="timeline-title" v-text="timeline.keterangan" />
                            <p class="timeline-time" v-text="timeline.waktu" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </main>

    <AddDeliveryOrderModal :open="openUpsertModal" @onClose="onCloseUpsertModal" />
</template>

<style scoped src="/src/styles/tracking.css"></style>