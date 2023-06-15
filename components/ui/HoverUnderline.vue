<template>
    <div ref="borderRef" class="absolute bottom-0 duration-100 ease-in w-0"></div>
</template>

<script setup>
    const props = defineProps({
        show: Boolean,
        color: {
            type: String,
            default: "white",
        },
    });

    const borderRef = ref(null);

    onMounted(() => {
        borderRef.value.parentNode.classList.add("relative");
        borderRef.value.parentNode.classList.add("flex");
        borderRef.value.parentNode.classList.add("justify-center");
        borderRef.value.parentNode.addEventListener("mouseenter", () => showBorder());
        borderRef.value.parentNode.addEventListener("mouseleave", () => hideBorder());

        if (props.show) {
            showBorder();
        }
    });

    function showBorder() {
        borderRef.value.classList.add("show");
    }
    function hideBorder() {
        if (!props.show) borderRef.value.classList.remove("show");
    }

    watch(
        () => props.show,
        (newVal) => {
            if (newVal) {
                showBorder();
            } else {
                hideBorder();
            }
        }
    );
</script>

<style lang="scss" scoped>
    .show {
        width: 100%;
        border: solid 1px v-bind("props.color");
    }
</style>
