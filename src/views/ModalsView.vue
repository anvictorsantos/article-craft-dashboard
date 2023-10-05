<template>
    <div class="modals">
        <h1>Modals</h1>
        <button @click="showModal = true">Show Modal</button>
        <ModalComponent
            v-if="showModal"
            title="This is a modal"
        >
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, accusamus alias quasi inventore voluptatem dolorem
                fugit cupiditate, molestiae ut earum reprehenderit a. Natus
                pariatur necessitatibus cumque iusto temporibus ullam ipsam.
            </p>
        </ModalComponent>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import ModalComponent from '@/components/ModalComponent.vue';

// modals
const showModal = ref(false);
</script>
