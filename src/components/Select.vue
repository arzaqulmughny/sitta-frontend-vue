<script setup>
defineProps({
    label: String,
    data: {
        type: Array,
        default: () => []
    },
    placeholder: String,
    valueKey: String,
    labelKey: String,
    inheritAttrs: false,
})

const emit = defineEmits([
    'update:modelValue'
])

</script>

<template>
    <label class="input-group">
        <p class="input-label">
            {{ label }}
        </p>

        <select class="input" v-bind="$attrs" @change="emit('update:modelValue', $event.target.value)">
            <option :value="null" selected>
                {{ placeholder ?? 'Pilih' }}
            </option>

            <option v-for="(value, index) in data" :key="valueKey ? value[valueKey] : index"
                :value="valueKey ? value[valueKey] : value">
                {{ labelKey ? value[labelKey] : value }}
            </option>
        </select>
    </label>
</template>

<style scoped>
.input-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}

.input-label {
    font-size: 13px;
    font-weight: 510;
    cursor: pointer;
}

.input {
    font-size: 13px;
    padding: 8px 12px;
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid var(--color-border);
}

.input:focus {
    outline: 1px solid var(--color-primary);
}
</style>