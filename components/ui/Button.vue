<template>
    <div>
        <button :type="type" :class="btnClass" class="flex justify-center items-center" :disabled="disabled">
            <slot />
        </button>
    </div>
</template>

<script setup>
    const props = defineProps({
        outlined: Boolean,
        primary: Boolean,
        type: String,
        disabled: Boolean,
    });

    const btnClass = computed(() => {
        let name =
            "flex justify-center text-primary-text font-semibold py-2 px-4 rounded-2xl shadow-lg my-4 z-10 w-40 transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 ";

        name +=
            props.primary && props.outlined
                ? "bg-transparent border-primary border-2 text-primary "
                : props.primary && !props.outlined
                ? "bg-primary hover:bg-white text-white hover:text-primary-text "
                : !props.primary && props.outlined
                ? "text-white bg-transparent border-background-1 border-2 hover:bg-primary hover:border-primary "
                : "bg-background-1 hover:bg-primary hover:text-white ";

        return name;
    });
</script>
