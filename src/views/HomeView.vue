<template>
    <div class="home">
        <h1 class="text-3xl font-bold underline">{{ counterData.title }}:</h1>
        <div>
            <button @click="decreaseCounter">-</button>
            <span>{{ counterData.count }}</span>
            <button @click="increaseCounter(2)">+</button>
        </div>

        <p>This counter is {{ oddOrEven }}</p>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input
                v-model="counterData.title"
                v-autofocus
                type="text"
            />
        </div>
    </div>
</template>

<script setup>
// imports

import { computed, onMounted, reactive, watch } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

// app title

onMounted(() => {
    console.log('Do stuff related to App Title');
});

// counter

const counterData = reactive({
    count: 0,
    title: 'My counter'
});

const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) {
        return 'even';
    }
    return 'odd';
});

watch(
    () => counterData.count,
    (newCount) => {
        if (newCount === 20) {
            alert('Way to go! You made it to 20');
        }
    }
);

// methods: often defined to display an output
const increaseCounter = (amount) => {
    counterData.count += amount;
};

// computed property: resulting in dynamic values based on data properties
const decreaseCounter = () => {
    counterData.count--;
};

onMounted(() => {
    console.log('Do stuff related to Counter');
});
</script>
