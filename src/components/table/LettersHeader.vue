<script setup lang="ts">
    import Cell from 'components/table/Cell.vue';
    defineProps<{ alphabet: string[] }>()
</script>

<template>
    <div class="row-header">
        <Cell class="header-cell empty"/>
        <Cell class="header-cell"/>
        <Cell
            v-for="letter in alphabet"
            :key="letter"
            :text="letter"
            class="header-cell"
        />
    </div>
</template>

<style lang="scss" scoped>
.row-header {
    display: flex;
}

.header-cell {
    height: 25px;
}

.empty {
    position: fixed;
}
</style>
