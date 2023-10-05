<template>
    <teleport to=".modals-container">
        <div class="modal">
            <h1>
                <slot name="title" />
            </h1>
            <slot />
            <button>Hide Modal</button>
        </div>
    </teleport>
</template>

<script setup>
import { useSlots } from 'vue';

const slots = useSlots();

console.log(slots.title());
</script>
