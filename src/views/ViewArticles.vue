<template>
    <div class="articles">
        <AddEditArticle
            ref="addEditArticleRef"
            v-model="newArticle"
            placeholder="Add a new article"
        >
            <template #buttons>
                <button
                    class="button is-link has-background-success"
                    :disabled="!newArticle"
                    @click="addArticle"
                >
                    Add New Article
                </button>
            </template>
        </AddEditArticle>

        <progress
            v-if="!storeArticles.articlesLoaded"
            class="progress is-large is-success"
            max="100"
        />

        <template v-else>
            <ArticleCard
                v-for="article in storeArticles.articles"
                :key="article.id"
                :article="article"
            />

            <div
                v-if="!storeArticles.articles.length"
                class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6"
            >
                No articles here yet...
            </div>
        </template>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import AddEditArticle from '@/components/articles/AddEditArticle.vue';
import ArticleCard from '@/components/articles/ArticleCard.vue';
import { useStoreArticles } from '@/stores/storeArticles';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeArticles = useStoreArticles();

const newArticle = ref('');
const addEditArticleRef = ref(null);

const addArticle = () => {
    storeArticles.addArticle(newArticle.value);
    newArticle.value = '';
    addEditArticleRef.value.focusTextArea();
};

useWatchCharacters(newArticle);

onMounted(() => {
    storeArticles.getArticles();
});
</script>
