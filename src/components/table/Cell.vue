<script setup lang="ts">
    import {computed, nextTick, PropType, ref, unref} from 'vue';

    const props = withDefaults(defineProps<{
        text?: string | number
        num?: number
        letter?: string
        rowIndex?: number
        colIndex?: number
        editable?: boolean
        selectedCell?: {row: number, col: number}
    }>(), {
        text: '',
        selectedCell: () => ({row: 0, col: 0}),
    });

    const isActive = computed(() => props.rowIndex === props.selectedCell?.row && props.colIndex === props.selectedCell?.col);

    const activeClass = computed(() => ({active: unref(isActive)}));

    const isTyping = ref(false);

    const input = ref<HTMLElement | null>(null);

    const emit = defineEmits(['update:text'])

    const onBlur = () => {
        isTyping.value = false
    }

    const activateInput = async () => {
        isTyping.value = true
        await nextTick()
        input.value?.focus()
    }

    const onInput = (e: any) => {
        emit('update:text', e.target.value)
        console.log('123');
    }
</script>

<template>
    <div
        class="cell"
        :class="activeClass"
        @dblclick="activateInput"
        @keydown="activateInput"
        @keyup="activateInput"
        @blur="onBlur"
    >
        <input
            v-if="isTyping && isActive"
            @input="onInput"
            ref="input"
            :value="text"
            @blur="onBlur"
        />
        <span v-else-if="text">{{ text }}</span>
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
    width: 80px;
    height: 25px;

    &.active {
        border: 2px solid blue;
        position: relative;

        &:after {
            content: "";
            display: block;
            width: 6px;
            height: 6px;
            background-color: blue;
            position: absolute;
            right: -5px;
            bottom: -5px;
            border: 1px solid white;
        }
    }
}

input {
    border: none;
    outline: none;
    height: 10px;
    width: 100%;
}

.header-cell {
    background-color: #f8f9fa;
}
</style>
