<script setup>
import OutlineStatUp from './icons/OutlineStatUp.vue';

defineProps({
    icon: {
        type: Object,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
    percentage: {
        type: Number,
        required: false,
        default: 0
    },
    variant: {
        type: String,
        required: false,
        default: 'darkBlue'
    }
})

const variantStyle = {
    darkBlue: 'background-color: rgb(215, 225, 251);',
    red: 'background-color: rgb(251, 215, 215);',
    green: 'background-color: rgb(224, 251, 215);',
    yellow: 'background-color: rgb(251, 243, 215);',
}
</script>

<template>
    <div class="card-analytics">
        <div class="card-analytics__header">
            <div class="card-analytics-icon" v-if="icon" :style="variantStyle[variant]">
                <component :is="icon" />
            </div>

            <div class="card-analytics-trend" v-if="percentage != 0">
                <OutlineStatUp v-if="percentage > 0" />
                <p v-show="percentage" v-text="`${percentage}%`"/>
            </div>
        </div>

        <h2 class="card-analytics-title" style="margin-top: 12px;">{{ title }}</h2>
        <p class="card-analytics-amount">{{ value }}</p>
    </div>
</template>

<style scoped>
.card-analytic {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
}

.card-analytics {
    display: flex;
    min-width: 150px;
    flex-direction: column;
    row-gap: 8px;
    border: 1px solid var(--color-border);
    padding: 24px;
    border-radius: 12px;
    background-color: white;
}

.card-analytics-icon {
    width: 38px;
    aspect-ratio: 1/1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
}

.card-analytics-icon svg {
    width: 22px;
    fill: rgba(0, 0, 0, 0.746);
}

.card-analytics-title {
    font-size: 12px;
}

.card-analytics-amount {
    font-size: 24px;
    font-weight: 600;
    color: var(--color-primary);
}

.card-analytics__header {
    display: flex;
    justify-content: space-between;
}

.card-analytics-trend {
    display: flex;
    align-items: center;
    background-color: rgb(240, 240, 240);
    border-radius: 12px;
    width: fit-content;
    column-gap: 8px;
    height: fit-content;
    padding-inline: 5px;
}

.card-analytics-trend svg {
    fill: rgb(85, 193, 85);
    width: 18px;
}

.card-analytics-trend p {
    font-size: 10px;
}
</style>