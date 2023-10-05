<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                {{ title }}
            </h1>
            <slot />
            <button @click="handleButtonClick">Hide Modal</button>
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
const emit = defineEmits(['hideModal']);

// handle button click
const handleButtonClick = () => {
    emit('hideModal');
};
</script>
