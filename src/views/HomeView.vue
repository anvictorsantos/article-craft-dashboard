<template>
    <div class="home">
        <h2 ref="appTitleRef">{{ appTitleRef }}</h2>

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

import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';

// app title

const appTitleRef = ref(null);

onMounted(() => {
    console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide`);
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
    nextTick(() => {
        console.log('do something when counter has updated in the dom');
    });
};

// computed property: resulting in dynamic values based on data properties
const decreaseCounter = () => {
    counterData.count--;
};

onMounted(() => {
    console.log('Do stuff related to Counter');
});
</script>

<style>
.home {
    text-align: center;
    padding: 20px;
}
.btn,
.counter {
    font-size: 40px;
    margin: 10px;
}
.edit {
    margin-top: 60px;
}
</style>
