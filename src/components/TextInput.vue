<script setup>
defineProps({
    label: String,
    inheritAttrs: false,
})
</script>

<template>
    <label class="input-group">
        <p v-text="label" class="input-label"/>
        <input v-bind="$attrs" type="text" class="input">
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