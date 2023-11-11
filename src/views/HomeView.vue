<template>
    <div class="home">
        <h2 ref="appTitleRef">{{ appTitle }}</h2>

        <h3>{{ counter.title }}:</h3>
        <div>
            <button @click="counter.decreaseCounter(2)">--</button>
            <button @click="counter.decreaseCounter(1)">-</button>
            <span>{{ counter.count }}</span>
            <button @click="counter.increaseCounter(1)">+</button>
            <button @click="counter.increaseCounter(2)">++</button>
        </div>

        <p>This counter is {{ counter.oddOrEven }}</p>

        <div class="edit">
            <h4>Edit counter title:</h4>
            <input
                v-model="counter.title"
                v-autofocus
                type="text"
            />
        </div>
    </div>
</template>

<script setup>
// imports

import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus';

// app title

const appTitle = 'My Ok Counter App';

const appTitleRef = ref(null);

// counter

const counter = useCounterStore();
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
