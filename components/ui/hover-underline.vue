<template>
    <div ref="borderRef" class="absolute bottom-0 duration-100 ease-in w-0"></div>
</template>

<script setup>
const borderRef = ref(null);

onMounted(() => {
    borderRef.value.parentNode.classList.add('relative');
    borderRef.value.parentNode.classList.add('flex');
    borderRef.value.parentNode.classList.add('justify-center');
    borderRef.value.parentNode.addEventListener('mouseenter', () => showBorder());
    borderRef.value.parentNode.addEventListener('mouseleave', () => hideBorder());
});

function showBorder() {
    borderRef.value.classList.add('show');
}
function hideBorder() {
    borderRef.value.classList.remove('show');
}
</script>

<style lang="scss" scoped>
.show {
    width: 100%;
    border: solid 1px white;
}
</style>
