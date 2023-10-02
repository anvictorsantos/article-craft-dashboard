<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/modals">Modals</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
    </nav>

    <RouterView />
</template>
