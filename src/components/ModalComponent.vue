<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                {{ title }}
            </h1>
            <slot />
            <button>Hide Modal</button>
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
</script>
