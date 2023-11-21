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
        <ArticleCard
            v-for="article in storeArticles.articles"
            :key="article.id"
            :article="article"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
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
</script>
