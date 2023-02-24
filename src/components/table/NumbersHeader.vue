<script setup lang="ts">
    import Cell from 'components/table/Cell.vue';
</script>

<template>
    <div class="">
        <Cell
            v-for="num in 100"
            :key="num"
            :text="num"
            class="header-cell"
        >
        </Cell>
    </div>
</template>

<style lang="scss" scoped>
.row-header {
}

.header-cell {
    background-color: #f8f9fa;
}
</style>
