<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show Modal</button>
        <teleport to=".modals-container">
            <div
                v-if="showModal"
                class="modal"
            >
                <h1>This is a modal</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Debitis, accusamus alias quasi inventore voluptatem dolorem
                    fugit cupiditate, molestiae ut earum reprehenderit a. Natus
                    pariatur necessitatibus cumque iusto temporibus ullam ipsam.
                </p>
                <button @click="showModal = false">Hide Modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue';

// modals
const showModal = ref(false);
</script>
