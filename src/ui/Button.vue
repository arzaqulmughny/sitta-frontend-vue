<script setup>
    defineProps({
        variant: {
            type: String,
            required: false,
            default: 'primary'
        },
        icon: Object
    })
</script>

<template>
    <button class="button" :class="`button--${variant}`">
        <component :is="icon" class="button__icon" v-if="icon" />
        <p class="button__text">
            <slot />
        </p>
    </button>
</template>

<style scoped>
.button {
    display: flex;
    cursor: pointer;
    align-items: center;
    column-gap: 8px;
    padding: 6px 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 10);
}

.button:hover {
    filter: brightness(90%)
}

.button__icon {
    height: 22px;
}

.button--white .button__icon {
    fill: var(--color-primary);
}

.button--white {
    background-color: white;
    display: flex;
    align-items: center;
    width: fit-content;
    border: none;
}

.button__text {
    font-weight: 500;
    font-size: 11px;
}

.button--white .button__text {
    color: var(--color-primary);
}

.button--primary {
    background-color: var(--color-primary-darker);
    border: none;
}

.button--primary .button__text {
    color: white;
}

.button--primary .button__text {
    color: white;
}


.button--primary .button__icon {
    color: white;
}
</style>