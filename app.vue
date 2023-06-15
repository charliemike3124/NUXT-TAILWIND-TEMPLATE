<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>

<script setup lang="ts">
    definePageMeta({
        title: "",
    });

    useSeoMeta({
        title: "",
        description: "",
    });

    const configStore = useConfigStore();
    useHead({
        htmlAttrs: {
            lang: configStore.lang,
        },
    });
</script>

<style lang="scss">
    body,
    html {
        background-color: var(--secondary-900);
        color: var(--primary-50);
        scroll-behavior: smooth;
        font-family: "Poppins", sans-serif, Helvetica, Arial, system-ui;
        overflow-x: hidden;
    }
</style>
