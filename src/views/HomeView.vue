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
    },
    computed: {
        myComputedProperty() {
            return 'my result'
        }
    },
    watch: {
        count(newCount, oldCount) {
            if (newCount == 20) alert ('count')
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

import { computed, reactive, watch } from 'vue';

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
</script>

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
                type="text"
            />
        </div>
    </div>
</template>
