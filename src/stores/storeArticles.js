import { defineStore, acceptHMRUpdate } from 'pinia';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useStoreArticles = defineStore('storeArticles', {
    state: () => ({
        articles: []
    }),
    actions: {
        async getArticles() {
            onSnapshot(collection(db, 'articles'), (querySnapshot) => {
                let articles = [];
                querySnapshot.forEach((doc) => {
                    let article = {
                        id: doc.id,
                        content: doc.data().content
                    };
                    articles.push(article);
                });
                this.articles = articles;
            });
        },
        addArticle(newArticleContent) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString();
            let article = {
                id,
                content: newArticleContent
            };
            this.articles.unshift(article);
        },
        deleteArticle(idToDelete) {
            this.articles = this.articles.filter(
                (article) => article.id !== idToDelete
            );
        },
        updateArticle(id, content) {
            let index = this.articles.findIndex((article) => article.id === id);
            this.articles[index].content = content;
        }
    },
    getters: {
        getArticleContent: (state) => {
            return (id) => {
                return state.articles.filter((article) => article.id === id)[0]
                    .content;
            };
        },
        totalArticlesCount: (state) => {
            return state.articles.length;
        },
        totalCharactersCount: (state) => {
            let count = 0;
            state.articles.forEach((article) => {
                count += article.content.length;
            });
            return count;
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreArticles, import.meta.hot));
}
