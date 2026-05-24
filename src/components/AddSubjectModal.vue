<script setup>
import Button from '@/ui/Button.vue';
import OutlineClose from './icons/OutlineClose.vue';
import TextInput from './TextInput.vue';
import Select from './Select.vue';
import columns from "@/data/inventory-columns"
import OutlinePlusCircle from './icons/OutlinePlusCircle.vue';
import { watch } from 'vue';

// Props
const props = defineProps({
    open: Boolean,
})

const emit = defineEmits(['onClose'])

// Method
const resolveComponent = (type) => {
    const map = {
        text: TextInput,
        number: TextInput,
        select: Select,
        textarea: TextInput
    }

    return map[type]
}

const onSubmit = (event) => {
    const formData = new FormData(event.target)
    const data = {}

    formData.forEach((value, key) => {
        data[key] = value
    })

    emit('onClose', data);
}

const onClose = () => {
    emit('onClose')
}

// Watch
watch(() => props.open, () => {
    props.open ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
})

</script>

<template>
    <Teleport to="body" v-if="open">
        <form class="background" v-on:submit.prevent="onSubmit">
            <div class="modal">
                <div class="modal-header">
                    <div class="modal-header__left">
                        <h1 class="h2">Tambah Bahan Ajar</h1>
                        <p class="p">Masukkan Informasi Bahan Ajar</p>
                    </div>

                    <Button type="button" @click="onClose" variant="white" :icon="OutlineClose" style="width: fit-content; column-gap: 0px;" />
                </div>

                <div class="modal-body">
                    <div class="form">
                        <component v-for="column in columns" :key="column.column" :is="resolveComponent(column.type)"
                            v-bind="column" :placeholder="column.placeholder" :label="column.title" :data="column.data"
                            :name="column.column" :required="false"/>
                    </div>
                </div>

                <div class="modal-footer">
                    <Button type="button" @click="onClose" variant="white" style="width: fit-content;"
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
    min-width: 500px;
    min-height: 500px;
    border-radius: 8px;
    overflow: hidden;
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
    overflow: scroll;
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
}
</style>