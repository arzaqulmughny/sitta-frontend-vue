<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    icon: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="main-menu-item">
        <div class="main-menu-item__header">
            <div class="main-menu-item__icon">
                <component :is="icon" />
            </div>

            <h3 class="h6">{{ title }}</h3>
        </div>

        <p class="p">
            {{ description }}
        </p>
    </div>
</template>


<style scoped>
.main-menu-item__header {
    display: flex;
    align-items: center;
    column-gap: 12px;
}

.main-menu-item-title {
    font-size: 14px;
    font-weight: 500;
}

.main-menu-item {
    border: 1px solid var(--color-border);
    border-radius: 12px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
}

.main-menu-item__description {
    font-size: 12px;
    line-height: 16px;
}

.main-menu-item__icon {
    background-color: rgb(244, 244, 244);
    width: 38px;
    height: 38px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.main-menu-item__icon svg {
    fill: var(--color-primary);
    width: 22px;
}

.main-menu-section {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    width: 100%;
}

.main-menu {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 12px;
    background-color: white;
}
</style>