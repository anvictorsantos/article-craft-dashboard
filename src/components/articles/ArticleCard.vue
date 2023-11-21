<template>
    <div class="card mb-4">
        <div class="card-content">
            <div class="content">
                {{ article.content }}
                <div class="has-text-right has-text-grey-light mt-2">
                    <small>{{ characterLength }}</small>
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
import { computed, reactive } from 'vue';
import ModalDeleteArticle from '@/components/articles/ModalDeleteArticle.vue';
import { useStoreArticles } from '@/stores/storeArticles';
import { RouterLink } from 'vue-router';

const props = defineProps({
    article: {
        type: Object,
        required: true
    }
});

useStoreArticles();

const characterLength = computed(() => {
    let length = props.article.content.length;
    let description = length > 1 ? 'characters' : 'character';

    return `${length} ${description}`;
});

const modals = reactive({
    deleteArticle: false
});
</script>
