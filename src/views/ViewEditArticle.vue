<template>
    <div class="edit-article">
        <AddEditArticle
            ref="addEditArticleRef"
            v-model="articleContent"
            bg-color="link"
            placeholder="Edit article"
            label="Edit Article"
        >
            <template #buttons>
                <button
                    class="button is-link is-light mr-2"
                    @click="$router.back()"
                >
                    Cancel
                </button>
                <button
                    class="button is-link has-background-link"
                    :disabled="!articleContent"
                    @click="handleSaveClicked"
                >
                    Save Article
                </button>
            </template>
        </AddEditArticle>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditArticle from '@/components/articles/AddEditArticle.vue';
import { useStoreArticles } from '@/stores/storeArticles';

const route = useRoute();
const router = useRouter();

const storeArticles = useStoreArticles();

const articleContent = ref('');

articleContent.value = storeArticles.getArticleContent(route.params.id);

const handleSaveClicked = () => {
    storeArticles.updateArticle(route.params.id, articleContent.value);
    router.push('/');
};
</script>
