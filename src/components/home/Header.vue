<script setup lang="ts">
    import { ref } from 'vue'
    import Logo from './Logo.vue';
    import Search from './Search.vue';

    // defineProps<{ msg: string }>()

    const count = ref(0)
</script>

<template>
    <div class="header">
        <AppIcon size="20" icon="mdiMenu" />
        <Logo />
        <Search class="header__search"/>
        <AppIcon size="20" icon="mdiDotsGrid" />
        <AppIcon size="28" icon="mdiAccountCircle" />
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
    color: var(--gray);

    &__search {
        flex: 1;
    }
}

</style>
