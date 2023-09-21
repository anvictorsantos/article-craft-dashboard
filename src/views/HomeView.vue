<!-- Options API -->
<!-- <script>
export default {
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increaseCounter() {
            this.counter++;
        },
        decreaseCounter() {
            this.counter--;
        }
    }
};
</script> -->

<!-- Compostion API (old pattern) -->
<!-- <script>
import { ref } from 'vue';

export default {
    setup() {
        // property
        const counter = ref(0);

        // computed property
        const increaseCounter = () => {
            counter.value++;
        };

        const decreaseCounter = () => {
            counter.value--;
        };

        // method property
        return {
            counter,
            increaseCounter,
            decreaseCounter
        };
    }
};
</script> -->

<script setup>
import { ref } from 'vue';

// property
const counter = ref(0);
// two-way data biding
const counterTitle = ref('My Counter');

// computed property
const increaseCounter = () => {
    counter.value++;
};

const decreaseCounter = () => {
    counter.value--;
};
</script>

<template>
    <div class="home">
        <h1 class="text-3xl font-bold underline">{{ counterTitle }}:</h1>
        <div>
            <button @click="decreaseCounter">-</button>
            <span>{{ counter }}</span>
            <button @click="increaseCounter">+</button>
        </div>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input
                v-model="counterTitle"
                type="text"
            />
        </div>
    </div>
</template>
