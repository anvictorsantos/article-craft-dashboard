import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    updateDoc
} from 'firebase/firestore';
import { acceptHMRUpdate, defineStore } from 'pinia';

import { db } from '@/js/firebase';

const articlesCollectionRef = collection(db, 'articles');
const articlesColletionQuery = query(
    articlesCollectionRef,
    orderBy('date', 'desc')
);

export const useStoreArticles = defineStore('storeArticles', {
    state: () => ({
        articles: [],
        articlesLoaded: false
    }),
    actions: {
        async getArticles() {
            this.articlesLoaded = false;
            onSnapshot(articlesColletionQuery, (querySnapshot) => {
                let articles = [];
                querySnapshot.forEach((doc) => {
                    let article = {
                        id: doc.id,
                        content: doc.data().content,
                        date: doc.data().date
                    };
                    articles.push(article);
                });
                this.articles = articles;
                this.articlesLoaded = true;
            });
        },
        async addArticle(newArticleContent) {
            let currentDate = new Date().getTime(),
                date = currentDate.toString();

            await addDoc(articlesCollectionRef, {
                content: newArticleContent,
                date: date
            });
        },
        async deleteArticle(idToDelete) {
            await deleteDoc(doc(articlesCollectionRef, idToDelete));
        },
        async updateArticle(id, content) {
            await updateDoc(doc(articlesCollectionRef, id), {
                content
            });
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
