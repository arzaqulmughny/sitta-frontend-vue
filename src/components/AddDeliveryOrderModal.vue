<script setup>
import Button from '@/ui/Button.vue';
import OutlineClose from './icons/OutlineClose.vue';
import TextInput from './TextInput.vue';
import { columns } from "@/data/tracking"
import OutlinePlusCircle from './icons/OutlinePlusCircle.vue';
import { onMounted, reactive, watch } from 'vue';
import Select from './Select.vue';
import { packages, data } from '@/data/tracking';

// Props
const props = defineProps({
    open: Boolean,
})

const emit = defineEmits(['onClose'])

const form = reactive({
    nim: null,
    ekspedisi: null,
    paket: null,
    tanggalKirim: null,
    harga: 0
})

// Method
const resolveComponent = (type) => {
    const map = {
        text: TextInput,
        number: TextInput,
        select: Select,
        textarea: TextInput,
        date: TextInput,
    }

    return map[type]
}

const getPrice = () => {
    if (form.paket) {
        return packages.find(packageItem => packageItem.kode == form['paket']).harga;
    }

    return 0;
}

const onSubmit = () => {
    emit('onClose', form);
}

const onClose = () => {
    emit('onClose')
}

// Watch
watch(() => props.open, () => {
    open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
})

watch(form, () => {
    form.harga = getPrice()
})

onMounted(() => {
    if (!localStorage.getItem('trackings')) {
        localStorage.setItem('trackings', JSON.stringify(data))
    }
})
</script>

<template>
    <Teleport to="body" v-if="open">
        <form class="background" v-on:submit.prevent="onSubmit">
            <div class="modal">
                <div class="modal-header">
                    <div class="modal-header__left">
                        <h1 class="h2">Tambah Pengiriman</h1>
                        <p class="p">Masukkan Detail Pengiriman</p>
                    </div>

                    <Button type="button" @click="onClose" variant="white" :icon="OutlineClose"
                        style="width: fit-content; column-gap: 0px;" />
                </div>

                <div class="modal-body">
                    <div class="form">
                        <component v-for="column in columns.filter((column) => column.type == 'text' || column.type == 'date')"
                            :key="column.column" :is="resolveComponent(column.type)" v-bind="column"
                            :placeholder="column.placeholder" :label="column.title" :data="column.data"
                            :name="column.column" :required="false" v-model="form[column.column]" />


                        <Select v-for="column in columns.filter(column => column.type == 'select')" :data="column.data"
                            :label="column.title" :name="column.column" v-model="form[column.column]" labelKey="nama"
                            valueKey="kode" :placeholder="column.placeholder" :key="column.column" />

                        <TextInput label="Harga" readonly
                            :placeholder="form.harga ? form?.harga?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) : 'Pilih Paket Untuk Mendapatkan Harga'"
                            disabled />

                        <div v-if="form.paket">
                            <p class="p">Isi Bahan Ajar:</p>
                            <ul class="packages">
                                <li v-for="packageItem in packages.find(packageItem => packageItem.kode == form.paket).isi" v-text="packageItem" class="p"/>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <Button type="button" @click="onClose" variant="outline" style="width: fit-content;"
                        :icon="OutlineClose">Batal</Button>
                    <Button type="submit" style="width: fit-content;" :icon="OutlinePlusCircle">Tambah</Button>
                </div>
            </div>
        </form>
    </Teleport>
</template>

<style scoped>
.background {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 99;
    top: 0;
    background-color: rgba(0, 0, 0, 0.10);
    justify-content: center;
    align-items: center;
}

.modal {
    background-color: white;
    width: 100%;
    margin-inline: 20px;
    min-height: 500px;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.modal-header__left {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}

.modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 24px;
    padding-inline: 24px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
}

.modal-body {
    overflow: auto;
    padding: 24px;
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
}

.modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    margin-top: auto;
}

.packages {
    list-style: disc;
    list-style-position: inside;
}
</style>