<template>
    <div class="group flex relative z-0">
        <slot />
        <span
            class="group-hover:opacity-100 transition-opacity bg-gray-800 px-2 py-2 z-50 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-12 opacity-0 m-4 mx-auto"
            >{{ props.text }}</span
        >
    </div>
</template>

<script setup>
    const props = defineProps({
        text: String,
    });
</script>
