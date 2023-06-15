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
                ? "bg-transparent border-primary-400 border-2 text-primary-400 "
                : props.primary && !props.outlined
                ? "bg-primary-400 hover:bg-white text-white hover:text-primary-text "
                : !props.primary && props.outlined
                ? "text-white bg-transparent border-secondary-50 border-2 hover:bg-primary-400 hover:border-primary-400 "
                : "bg-secondary-50 hover:bg-primary-400 hover:text-primary-text ";

        return name;
    });
</script>
