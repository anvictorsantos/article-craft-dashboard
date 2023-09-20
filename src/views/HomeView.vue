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

<!-- Compostion API -->
<script>
export default {
    setup() {}
};
</script>

<template>
    <div class="home">
        <h1 class="text-3xl font-bold underline">TESTE</h1>
        <div>
            <button @click="decreaseCounter">-</button>
            <span>{{ counter }}</span>
            <button @click="increaseCounter">+</button>
        </div>
    </div>
</template>
