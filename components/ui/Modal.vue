<template>
    <dialog
        ref="dialog"
        class="dialog p-8 rounded-xl shadow-2xl duration-300 bg-gray-100 opacity-0 backdrop:opacity-0 backdrop:duration-300"
        :class="modalClass"
    >
        <div class="flex flex-col">
            <UiIcon icon="close" class="cursor-pointer self-end hover:translate-y-0" @click="close" />
            <slot />
        </div>
    </dialog>
</template>

<script setup>
    const dialog = ref(null);
    const modalClass = ref("");

    function show() {
        dialog.value.showModal();
        modalClass.value = "opacity-100 backdrop:opacity-100";
    }

    function close() {
        modalClass.value = "opacity-0 backdrop:opacity-0";

        setTimeout(() => {
            dialog.value.close();
        }, 300);
    }

    defineExpose({
        show,
        close,
    });
</script>

<style lang="scss" scoped>
    .dialog {
        position: fixed;
        &::backdrop {
            background: rgba(0, 0, 0, 0.3);
        }
    }
</style>
