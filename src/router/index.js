import { createRouter, createWebHashHistory } from 'vue-router';
import ViewArticles from '@/views/ViewArticles.vue';
import ViewStats from '@/views/ViewStats.vue';
import ViewEditArticle from '@/views/ViewEditArticle.vue';

const routes = [
    {
        path: '/',
        name: 'articles',
        component: ViewArticles
    },
    {
        path: '/editArticle/:id',
        name: 'edit-article',
        component: ViewEditArticle
    },
    {
        path: '/stats',
        name: 'stats',
        component: ViewStats
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
