<template>
    <div class="posts">
        <h1>Posts</h1>

        <ul>
            <li
                v-for="post in posts"
                :key="post.id"
            >
                <RouterLink :to="`/postDetail/${post.id}`">{{
                    post.title
                }}</RouterLink>
            </li>
        </ul>

        <textarea v-autofocus></textarea>

        <div>
            <button
                :style="{
                    'background-color':
                        counter.oddOrEven === 'odd' ? 'pink' : 'yellow'
                }"
                @click="counter.increaseCounter(1)"
            >
                {{ counter.count }}
            </button>
        </div>
    </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus';

// mock posts
const posts = ref([
    {
        id: 'id1',
        title: 'Post 1'
    },
    {
        id: 'id2',
        title: 'Post 2'
    },
    {
        id: 'id3',
        title: 'Post 3'
    }
]);

// counter

const counter = useCounterStore();
</script>

<style scoped>
ul {
    margin-bottom: 30px;
}
</style>
