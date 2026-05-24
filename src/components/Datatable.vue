<script setup>
import Button from '@/ui/Button.vue';
import OutlineListOrderIcon from './icons/OutlineListOrderIcon.vue';
import OutlinePencil from './icons/OutlinePencil.vue';

// Data
defineProps({
    data: {
        type: Array,
    },
    columns: {
        type: Array
    },
    activeOrderBy: {
        type: String,
    },
    activeOrderBySort: {
        type: String
    }
})

// Methods
const emit = defineEmits(['setOrderBy', 'onEditStock']);

const onSetOrderBy = (column) => {
    emit('setOrderBy', column);
}

const onEditStock = (code) => {
    emit('onEditStock', code)
}
</script>

<template>
    <table>
        <thead>
            <tr>
                <td v-for="column in columns">
                    <button @click="onSetOrderBy(column.column)" type="button" class="table-header" :class="{
                        'table-header--active': activeOrderBy === column.column,
                        'table-header--desc': activeOrderBy === column.column && activeOrderBySort === 'desc'
                    }">
                        <p v-text="column.title" />
                        <OutlineListOrderIcon class="table-header__icon" />
                    </button>
                </td>
            </tr>
        </thead>

        <tbody>
            <tr v-if="data.length == 0">
                <td colspan="100" style="text-align: center;">Tidak ada data ditemukan!</td>
            </tr>

            <tr v-for="item in data" :key="item.kode">
                <td v-text="item.kode"></td>
                <td v-text="item.judul"></td>
                <td v-text="item.kategori"></td>
                <td v-text="item.upbjj"></td>
                <td v-text="item.lokasiRak"></td>
                <td>
                    <div style="display: flex; align-items: flex-start;">
                        <p>{{ item.qty }}</p>
                        <button @click="onEditStock(item.kode)" type="button" class="edit-stock">
                            <OutlinePencil />
                        </button>
                    </div>
                </td>
                <td v-text="item.safety"></td>
                <td v-if="item.qty < item.safety && item.qty > 0"><span class="stock-warn stock-status">Hampir
                        Habis</span></td>
                <td v-else-if="item.qty == 0"><span class="stock-danger stock-status">Kosong</span></td>
                <td v-else><span class="stock-ok stock-status">Aman</span></td>
                <td v-html="item.catatanHTML"></td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
table {
    width: 100%;
}

thead tr td {
    background-color: rgb(255, 255, 255);
    font-size: 14px;
    text-wrap: nowrap;
    font-weight: 510;
    color: rgb(22, 22, 22);
}

table tr td {
    padding: 12px 24px;
}

tr {
    border-bottom: 1px solid var(--color-border);
}

tbody tr td {
    padding-block: 18px;
    font-size: 13px;
    line-height: 18px;
}

.table-header {
    background-color: transparent !important;
    border: none;
    display: flex;
    align-items: center;
    column-gap: 12px;
    cursor: pointer;
    padding: 0;
}

.table-header p {
    font-weight: 600;
    font-size: 14px;
    color: var(--color-primary);
}

.table-header__icon {
    width: 18px;
    height: 18px;
    rotate: 180deg;
    fill: var(--color-primary);
    opacity: 0;
    transition: all 0.4s ease;
}

.table-header--active .table-header__icon {
    opacity: 100%;
}

.table-header--desc .table-header__icon {
    rotate: 0deg;
}

.table-header:hover .table-header__icon {
    opacity: 1;
}
/* Stock */
.stock-status {
    font-size: 10px !important;
    text-wrap: nowrap;
    padding: 4px 8px;
    border-radius: 12px;
}

.stock-ok {
    background-color: rgb(188, 244, 188);
    color: rgb(8, 60, 8);
}

.stock-warn {
    background-color: rgb(255, 233, 168);
    color: rgb(87, 67, 6);
}

.stock-danger {
    background-color: #ffd0d0;
    color: #960000;
}

.edit-stock {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.edit-stock svg {
    width: 12px;
}
</style>