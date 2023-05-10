<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="text-center">
      <p class="text-4xl">Hi {{ user.name }}!</p>
      <p>This is an example Nuxt 3 application</p>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/store/user";
const user = useUserStore();
</script>
