<script setup lang="ts">
    import AppLogo from 'components/AppLogo.vue';
</script>

<template>
    <div class="header">
        <AppLogo text="Новая таблица" />
    </div>
</template>

<style lang="scss" scoped>
.header {
    transition: background-color 300ms;
    background-color: white;
    box-sizing: border-box;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    overflow: hidden;
    height: 64px;
    padding: 8px 20px;
}
</style>
