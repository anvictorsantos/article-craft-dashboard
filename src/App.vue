<template>
    <NavBar />

    <div class="is-max-desktop container px-2 py-4">
        <RouterView />
    </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
import { useStoreArticles } from '@/stores/storeArticles';
import { onMounted } from 'vue';

const storeArticles = useStoreArticles();

onMounted(() => {
    storeArticles.getArticles();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
