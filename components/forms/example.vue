<template>
    <form @submit.prevent.stop="onSubmit" class="form flex flex-col gap-4 text-left">
        <label for="input1">Input 1</label>
        <input
            id="input1"
            class="bg-white rounded-lg h-12 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary text-primary-text"
            v-model="form.input1"
        />

        <label for="input2">Input 2</label>
        <input
            id="input2"
            class="bg-white rounded-lg h-12 px-4 py-2 duration-700 outline-transparent focus-visible:outline-primary text-primary-text"
            v-model="form.input2"
        />

        <UiButton type="submit" primary :disabled="submitBtn.disabled" class="duration-200" :class="submitBtn.class">
            {{ submitBtn.text }}
        </UiButton>
    </form>
</template>

<script setup>
    const form = ref({
        input1: "",
        input2: "",
    });

    const submitBtn = ref({
        text: "Submit",
        disabled: false,
        class: "",
    });

    function onSubmit() {
        submitBtn.value.text = "Confirmed!";
        submitBtn.value.disabled = true;
        submitBtn.value.class = "-translate-y-2";
    }
</script>

<style lang="scss" scoped>
    .form {
        max-width: 600px;
        min-width: 260px;

        @media (min-width: 768px) {
            min-width: 400px;
        }
    }
</style>
