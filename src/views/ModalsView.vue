<template>
    <div class="modals">
        <h1>Modals</h1>
        <div>
            <label>
                Show dark modals?
                <input
                    v-model="showDarkModals"
                    type="checkbox"
                />
            </label>
        </div>
        <button @click="showModal = true">Show Modal</button>
        <component
            :is="Modal"
            v-if="showModal"
            title="This is a modal"
        >
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis, accusamus alias quasi inventore voluptatem dolorem
                fugit cupiditate, molestiae ut earum reprehenderit a. Natus
                pariatur necessitatibus cumque iusto temporibus ullam ipsam.
            </p>
        </component>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

// modals
const showDarkModals = ref(false);
const showModal = ref(false);
</script>
