<template>
    <NuxtLayout>
        <NuxtPage></NuxtPage>
    </NuxtLayout>
</template>

<script setup lang="ts">
    definePageMeta({
        title: "Charlie Villalobos",
    });

    useSeoMeta({
        title: "Charlie Villalobos",
        description:
            "Exceptional web development solutions tailored to your needs. Freelance web developer Carlos Villalobos crafts high-quality websites and applications using cutting-edge technologies. Explore success stories, consult for recommendations, integrate APIs seamlessly, and expand your skills. Contact Carlos Villalobos for digital excellence!",
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
        background-color: var(--background-1);
        color: var(--primary-text);
        scroll-behavior: smooth;
        font-family: "Poppins", sans-serif, Helvetica, Arial, system-ui;
        overflow-x: hidden;
    }
</style>
