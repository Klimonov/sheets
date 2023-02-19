<script setup lang="ts">
    const props = defineProps<{
        text: string
    }>();
</script>

<template>
    <div class="logo">
        <AppIcon size="40" icon="mdiFileDocumentOutline" />
        <span v-if="text" class="text">{{ props.text }}</span>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
    gap: 10px;
    padding: 4px;
    color: var(--dark-gray);
    font-size: var(--font-big);
}

.text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
