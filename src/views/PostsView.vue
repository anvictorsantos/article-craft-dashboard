<template>
    <div class="posts">
        <h1>Posts</h1>

        <ul>
            <li>
                <RouterLink to="/postDetail/id1">Post 1</RouterLink>
                <RouterLink to="/postDetail/id2">Post 2</RouterLink>
                <RouterLink to="/postDetail/id3">Post 3</RouterLink>
                <RouterLink to="/postDetail/id4">Post 4</RouterLink>
            </li>
        </ul>

        <textarea v-autofocus></textarea>
    </div>
</template>

<script setup>
import { vAutofocus } from '../directives/vAutofocus';
</script>
