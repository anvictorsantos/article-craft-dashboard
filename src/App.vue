<template>
    <NavBar />

    <div class="is-max-desktop container px-2 py-4">
        <RouterView />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

import NavBar from '@/components/layout/NavBar.vue';
import { useStoreAuth } from '@/stores/storeAuth';

const storeAuth = useStoreAuth();

onMounted(() => {
    storeAuth.init();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
