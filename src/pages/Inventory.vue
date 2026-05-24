<script setup>
import CardAnalytics from '@/components/CardAnalytics.vue';
import OutlineAlert from '@/components/icons/OutlineAlert.vue';
import OutlineBookmark from '@/components/icons/OutlineBookmark.vue';
import OutlineInventory from '@/components/icons/OutlineInventory.vue';
import OutlineWarning from '@/components/icons/OutlineWarning.vue';
import { getInventoryData, storeInventoryData } from "@/data/inventory"
import branchesData from "@/data/branch";
import subjectCategoriesData from "@/data/subject-category";
import stockEnum from '@/data/stock-enum';
import { onMounted, ref, watch } from 'vue';
import columns from "@/data/inventory-columns";
import Datatable from '@/components/Datatable.vue';
import OutlineMagnifier from '@/components/icons/OutlineMagnifier.vue';
import OutlinePlusCircle from '@/components/icons/OutlinePlusCircle.vue';
import Button from '@/ui/Button.vue';
import OutlineClose from '@/components/icons/OutlineClose.vue';
import AddSubjectModal from '@/components/AddSubjectModal.vue';
import Swal from 'sweetalert2'

// Data
const data = ref([]);
const branches = branchesData;
const subjectCategories = subjectCategoriesData;

// State
const selectedBranch = ref("");
const selectedSubjectCategory = ref("");
const selectedStockStatus = ref("");
const selectedOrderBy = ref(null);
const orderBySort = ref('asc');
const openUpsertModal = ref(false);
const searchQuery = ref('');

// Methods
const buildParams = () => ({
    branch: selectedBranch.value,
    subject_category: selectedSubjectCategory.value,
    stock_status: selectedStockStatus.value,
    order_by: selectedOrderBy.value,
    order_by_sort: orderBySort.value,
    search: searchQuery.value,
})

const setOrderBy = (column) => {
    if (selectedOrderBy.value !== column) {
        selectedOrderBy.value = column
        orderBySort.value = 'asc'
        return
    }

    if (orderBySort.value === 'asc') {
        orderBySort.value = 'desc'
        return
    }

    selectedOrderBy.value = null
    orderBySort.value = 'asc'
}

const clearParams = () => {
    selectedBranch.value = ''
    selectedSubjectCategory.value = ''
    selectedStockStatus.value = ''
    selectedOrderBy.value = null
    orderBySort.value = 'asc'
    searchQuery.value = ''
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

        // Validate unique code
        const isUniqueCode = data.value.find((item) => item.kode === payload.kode)
        if (isUniqueCode) {
            Swal.fire({
                title: 'Gagal',
                text: 'Kode mata kuliah sudah ada.',
                icon: 'error',
                confirmButtonText: 'OK'
            })

            return
        }

        storeInventoryData(payload);

        Swal.fire({
            title: 'Berhasil',
            text: 'Bahan ajar berhasil ditambahkan.',
            icon: 'success',
            confirmButtonText: 'OK'
        })

        data.value = getInventoryData(buildParams());
    }

    openUpsertModal.value = false;
}

// Watch
watch([selectedBranch, selectedSubjectCategory, selectedStockStatus, selectedOrderBy, orderBySort, searchQuery], () => {
    data.value = getInventoryData(buildParams())
})

// On mount
onMounted(() => {
    data.value = getInventoryData(buildParams())
    document.title = 'Informasi Stok - Sistem Tracking Bahan Ajar'
})
</script>

<template>
    <main class="main">
        <div class="header">
            <div class="header__left">
                <h1 class="h1">Informasi Stok Bahan Ajar</h1>
                <p class="p">Monitoring Stok Bahan Ajar yang Tersedia.</p>
            </div>

            <Button :icon="OutlinePlusCircle" @click="() => openUpsertModal = true">Tambah Bahan Ajar</Button>
        </div>

        <section class="analytics">
            <ul class="card-analytic">
                <li>
                    <CardAnalytics title="Total Bahan Ajar" value="450" :icon="OutlineBookmark" />
                </li>

                <li>
                    <CardAnalytics title="Total Stok Tersedia" value="100" :icon="OutlineInventory" variant="green" />
                </li>

                <li>
                    <CardAnalytics title="Stok Hampir Habis" value="6" :icon="OutlineWarning" variant="yellow" />
                </li>

                <li>
                    <CardAnalytics title="Stok Kosong" value="2" :icon="OutlineAlert" variant="red" />
                </li>
            </ul>
        </section>

        <section class="filters">
            <select class="select" v-model="selectedBranch">
                <option value="">Pilih UT Daerah</option>
                <option v-for="branch in branches" v-text="branch" :key="branch" />
            </select>

            <select class="select" v-model="selectedSubjectCategory">
                <option value="">Pilih Kategori Mata Kuliah</option>
                <option v-for="category in subjectCategories" v-text="category" :key="category" />
            </select>

            <select class="select" v-model="selectedStockStatus">
                <option value="">Pilih Status Stok</option>
                <option v-for="status in stockEnum" v-text="status.label" :key="status.key" :value="status.key" />
            </select>

            <label class="search">
                <div class="search-icon">
                    <OutlineMagnifier />
                </div>
                <input type="text" v-model.lazy="searchQuery" placeholder="Cari berdasarkan kode atau nama...">
            </label>

            <Button type="button" @click="clearParams()" style="width: 100%;" :icon="OutlineClose">Bersihkan
                Filter</Button>
        </section>

        <section class="inventory">
            <Datatable :data="data" :columns="columns" :activeOrderBy="selectedOrderBy" :activeOrderBySort="orderBySort"
                @setOrderBy="setOrderBy" />
        </section>
    </main>

    <AddSubjectModal :open="openUpsertModal" @onClose="onCloseUpsertModal" />
</template>

<style scoped src="/src/styles/inventory.css"></style>