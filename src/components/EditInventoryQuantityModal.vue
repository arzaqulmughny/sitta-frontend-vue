<script setup>
import Button from '@/ui/Button.vue';
import OutlineClose from './icons/OutlineClose.vue';
import Select from './Select.vue';
import columns from "@/data/inventory-columns"
import OutlinePlusCircle from './icons/OutlinePlusCircle.vue';
import { reactive, watch } from 'vue';
import TextInput from './TextInput.vue';
import OutlineCheck from './icons/OutlineCheck.vue';

// Props
const props = defineProps({
    open: Boolean,
    data: Object
})

const form = reactive({
    qty: 0,
    safety: 0,
    kode: 0
})

const emit = defineEmits(['onClose'])

// Method
const onSubmit = () => {
    emit('onClose', form);
}

const onClose = () => {
    emit('onClose')
}

// Watch
watch(
    () => [props.open, props.data],
    (val) => {
        document.body.style.overflow = props.open ? 'hidden' : 'auto'

        if (val && props.data) {
            form.kode = props.data.kode ?? '-'
            form.qty = props.data.qty ?? 0
            form.safety = props.data.safety ?? 0
        }
    },
    { immediate: true }
)

</script>

<template>
    <Teleport to="body">
        <form class="background" v-on:submit.prevent="onSubmit" v-if="open">
            <div class="modal">
                <div class="modal-header">
                    <div class="modal-header__left">
                        <h1 class="h2">Ubah Stok Tersedia</h1>
                        <p class="p">Masukkan Informasi Stok</p>
                    </div>

                    <Button type="button" @click="onClose" variant="white" :icon="OutlineClose"
                        style="width: fit-content; column-gap: 0px;" />
                </div>

                <div class="modal-body">
                    <div class="form">
                        <TextInput label="Kode MK" placeholder="-" type="text" v-model="form.kode" disabled />
                        <TextInput label="Stok Minimum" placeholder="-" type="number" v-model="form.safety" />
                        <TextInput label="Stok Saat Ini" placeholder="Masukkan Stok Saat Ini" type="number"
                            v-model="form.qty" />
                    </div>
                </div>

                <div class="modal-footer">
                    <Button type="button" @click="onClose" variant="white" style="width: fit-content;"
                        :icon="OutlineClose">Batal</Button>
                    <Button type="submit" style="width: fit-content;" :icon="OutlineCheck">Simpan</Button>
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
    min-width: 500px;
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
</style>