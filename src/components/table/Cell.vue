<script setup lang="ts">
    defineProps<{
        text?: string
        num?: string
        letter?: string
        rowIndex?: number
        colIndex?: number
    }>();
</script>

<template>
    <div class="cell">
        <span v-if="text">{{ text }}</span>
    </div>
</template>

<style lang="scss" scoped>
.cell {
    box-sizing: border-box;
    padding: 4px;
    text-align: center;
    border: 1px solid var(--gray);
    border-collapse: collapse;
    font-size: var(--font-tiny);
    color: var(--dark-gray);
    min-width: 80px;
    min-height: 20px;
}

.header-cell {
    background-color: #f8f9fa;
}
</style>
