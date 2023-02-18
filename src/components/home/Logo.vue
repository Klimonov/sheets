<script setup lang="ts">
</script>

<template>
    <div class="logo">
        <AppIcon size="40" icon="mdiFileDocumentOutline" />
        <span class="text">Таблицы</span>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
    gap: 10px;
    padding: 4px;
    color: var(--gray);
    font-size: var(--font-big);
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
