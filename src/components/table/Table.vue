<script setup lang="ts">
    import RowHeader from 'components/table/LettersHeader.vue';
    import ColumnHeader from 'components/table/NumbersHeader.vue';
    import Cell from 'components/table/Cell.vue';
    import {ref, watch} from 'vue';

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const selectedCell = ref<{row:number, col:number}>({row: 0, col: 0})

    const text = ref('');
    watch(text, (value: any) => {
        console.log(value);
    })

    const selectCell = (rowIndex: number, columnIndex: number) => {
        selectedCell.value.row = rowIndex
        selectedCell.value.col = columnIndex
    }
</script>

<template>
    <div class="table">
        <RowHeader :alphabet="alphabet" class="row-header" />
        <div class="table-content">
            <ColumnHeader class="column-header" />
            <div
                v-for="(num, rowIndex) in 100"
                :key="num"
                class="row"
            >
                <Cell
                    v-for="(letter, colIndex) in alphabet.length + 1"
                    :key="num + letter"
                    @click="selectCell(rowIndex, colIndex)"
                    :num="num"
                    v-model:text="text"
                    editable
                    :selectedCell="selectedCell"
                    :letter="alphabet[colIndex]"
                    :rowIndex="rowIndex"
                    :colIndex="colIndex"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.table {
    position: relative;
    overflow: scroll;
    width: 100%;
    height: calc(100vh - 40px - 64px);
}
.column-header {
    display: flex;
    flex-direction: column;
    position: sticky;
    left: 0;
    max-width: 20px;
    height: 0;
}

.row-header {
    display: flex;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 1;
}

.table-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: min-content;
    height: min-content;
}

.row {
    display: flex;
}
</style>
