<script setup lang="ts">
</script>

<template>
    <div class="input-warp">
        <AppIcon
            icon="mdiMagnify"
            class="input-icon"
            size="25"
        />
        <input
            type="text"
            placeholder="Поиск"
        />
    </div>
</template>

<style scoped lang="scss">
.input-warp {
    position: relative;
    margin: 0 40px;
}
.input-icon {
    position: absolute;
    top: 14px;
    left: 14px;
}
input {
    height: 48px;
    width: 100%;
    padding: 0 12px 0 50px;
    box-sizing: border-box;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: none;
    font-size: var(--font-medium);
    line-height: 20px;
    background-color: var(--light-gray);
    color: var(--gray);
    &:focus {
        background-color: white;
        border: 1px solid var(--light-gray);
    }
    &::placeholder {
        color: var(--gray);
        font-size: var(--font-medium);
    }
}
</style>
