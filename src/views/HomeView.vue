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
// import { ref } from 'vue';

// // property
// const counter = ref(0);
// // two-way data biding
// const counterTitle = ref('My Counter');

import { reactive } from 'vue';

const counterData = reactive({
    count: 0,
    title: 'My counter'
});

// computed property
const increaseCounter = () => {
    counterData.count++;
};

const decreaseCounter = () => {
    counterData.count--;
};
</script>

<template>
    <div class="home">
        <h1 class="text-3xl font-bold underline">{{ counterData.title }}:</h1>
        <div>
            <button @click="decreaseCounter">-</button>
            <span>{{ counterData.count }}</span>
            <button @click="increaseCounter">+</button>
        </div>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input
                v-model="counterData.title"
                type="text"
            />
        </div>
    </div>
</template>
