<script setup lang="ts">
    import {computed, onMounted, ref} from 'vue';
    interface Props {
        icon: string
        size?: string | number
        viewbox?: string
        flip?: FlipDirection
        color?: string
    }

    type FlipDirection = 'horizontal' | 'vertical' | 'both' | 'none'

    const props = withDefaults(defineProps<Props>(), {
        size: 24,
        rotate: 0,
        viewbox: "0 0 24 24",
        color: '#414549',
    });

    const iconPath = ref('');

    const styles = computed(() => ({
        "color": props.color,
    }));

    onMounted(async () => {
        // @ts-ignore
        import('@mdi/js').then(({[props.icon]: path}) => {
            iconPath.value = path
        })
    })

</script>

<template>
    <div class="icon-wrap">
        <svg
            :width="size"
            :height="size"
            :viewBox="viewbox"
            :style="styles"
            :class="flip"
        >
            <path :d="iconPath" />
        </svg>
    </div>
</template>

<style scoped>
.icon-wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

path {
    fill: currentColor;
}

.none {
    transform: scale(1);
}

.horizontal {
    transform: scale(-1, 1);
}

.vertical {
    transform: scale(1, -1);
}

.both {
    transform: scale(-1, -1);
}
</style>
