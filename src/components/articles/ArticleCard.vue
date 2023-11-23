<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ article.content }}
                <div class="columns is-mobile has-text-grey-light mt-2">
                    <small class="column">{{ dateFormatted }}</small>
                    <small class="column has-text-right">{{
                        characterLength
                    }}</small>
                </div>
            </div>
        </div>
        <footer class="card-footer">
            <RouterLink
                :to="`/editArticle/${article.id}`"
                href="#"
                class="card-footer-item"
                >Edit</RouterLink
            >
            <a
                href="#"
                class="card-footer-item"
                @click.prevent="modals.deleteArticle = true"
                >Delete</a
            >
        </footer>
        <ModalDeleteArticle
            v-if="modals.deleteArticle"
            v-model="modals.deleteArticle"
            :article-id="article.id"
        />
    </div>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core';
import { computed, reactive } from 'vue';
import { RouterLink } from 'vue-router';

import ModalDeleteArticle from '@/components/articles/ModalDeleteArticle.vue';
import { useStoreArticles } from '@/stores/storeArticles';

const props = defineProps({
    article: {
        type: Object,
        required: true
    }
});

useStoreArticles();

const dateFormatted = computed(() => {
    let date = new Date(parseInt(props.article.date));
    return useDateFormat(date, 'MM-DD-YYYY @ HH:mm').value;
});

const characterLength = computed(() => {
    let length = props.article.content.length;
    let description = length > 1 ? 'characters' : 'character';

    return `${length} ${description}`;
});

const modals = reactive({
    deleteArticle: false
});
</script>
