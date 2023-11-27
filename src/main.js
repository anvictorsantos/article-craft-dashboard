import { createPinia } from 'pinia';
import { createApp, markRaw } from 'vue';

import router from '@/router';

import App from './App.vue';

const pinia = createPinia();

createApp(App)
    .use(
        pinia.use(({ store }) => {
            store.router = markRaw(router);
        })
    )
    .use(router)
    .mount('#app');
