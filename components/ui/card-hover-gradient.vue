<template>
    <div ref="cardRef" class="card-gradient-on-hover">
        <slot></slot>
    </div>
</template>

<script setup>
const cardRef = ref(null);

onMounted(() => {
    cardRef.value.onmousemove = (e) => {
        const rect = cardRef.value.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

            cardRef.value.style.setProperty('--mouse-x', `${x}px`);
            cardRef.value.style.setProperty('--mouse-y', `${y}px`);
    };
});
</script>

<style lang="scss" scoped>
.card-gradient-on-hover {
    position: relative;
}

.card-gradient-on-hover:hover::before {
    opacity: 1;
}

.card-gradient-on-hover::before,
.card-gradient-on-hover::after {
    border-radius: inherit;
    content: '';
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
    pointer-events:none;
}

.card-gradient-on-hover::before {
    background: radial-gradient(
        800px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.06),
        transparent 40%
    );
    z-index: 3;
}

.card-gradient-on-hover::after {
    background: radial-gradient(
        600px circle at var(--mouse-x) var(--mouse-y),
        rgba(255, 255, 255, 0.4),
        transparent 40%
    );
    z-index: 1;
}
</style>
