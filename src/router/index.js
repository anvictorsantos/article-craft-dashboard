import { createRouter, createWebHashHistory } from 'vue-router';

import { useStoreAuth } from '@/stores/storeAuth';

import ViewArticles from '@/views/ViewArticles.vue';
import ViewAuth from '@/views/ViewAuth.vue';
import ViewEditArticle from '@/views/ViewEditArticle.vue';
import ViewStats from '@/views/ViewStats.vue';

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
    },
    {
        path: '/auth',
        name: 'auth',
        component: ViewAuth
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

router.beforeEach(async (to, from) => {
    const storeAuth = useStoreAuth();

    if (!storeAuth.user.id && to.name !== 'auth') {
        return { name: 'auth' };
    }
    if (storeAuth.user.id && to.name === 'auth') {
        return false;
    }
});

export default router;
