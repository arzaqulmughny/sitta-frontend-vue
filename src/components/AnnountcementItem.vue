<script setup>
defineProps({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="announcement-items">
        <div class="announcement-items__header">
            <p class="announcement-items-type announcement-items-type--red">{{ type }}</p>
            <p class="announcement-items-time">{{ time }}</p>
        </div>
        <h3 class="announcement-items-title">{{ title }}</h3>
        <p class="announcement-items-body">{{ message }}</p>
    </div>
</template>

<style scoped>
.announcement-items {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
    background-color: white;
}

.announcement-items-type {
    font-size: 12px;
    width: fit-content;
    font-weight: 510;
    padding: 2px 8px;
    border-radius: 4px;
}

.announcement-items-type--red {
    background-color: rgb(251, 215, 215);
    ;
}

.announcement-items-title {
    font-size: 14px;
    font-weight: 550;
    padding-inline: 24px;
}

.announcement-items-body {
    font-size: 12px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.626);
    line-height: 16px;
    border-bottom: 1px solid var(--color-border);
    padding-inline: 24px;
    padding-bottom: 12px;
}

.announcement-items__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 24px;
    padding-top: 12px;
}

.announcement-items-time {
    font-size: 12px;
}
</style>