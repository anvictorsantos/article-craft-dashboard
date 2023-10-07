<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                {{ title }}
            </h1>
            <slot />
            <button @click="$emit('update:modelValue', false)">
                Hide Modal
            </button>
        </div>
    </teleport>
</template>

<script setup>
// props
const props = defineProps({
    title: {
        type: String,
        default: 'No title specified'
    }
});

console.log(props.title);

// emits
const emit = defineEmits(['update:modelValue']);
</script>

<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>
