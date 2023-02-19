<script setup lang="ts">
    import Header from 'components/table/Header.vue'
    import ActionPanel from 'components/table/ActionPanel.vue'
    import Table from 'components/table/Table.vue'
</script>

<template>
    <div class="table-page">
        <Header />
        <ActionPanel />
        <Table />
    </div>
</template>

<style scoped>
.table-page {
    height: 100vh;
    overflow: hidden;
}
</style>
