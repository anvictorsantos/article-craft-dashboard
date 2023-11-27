import { auth } from '@/js/firebase';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useStoreAuth = defineStore('storeAuth', {
    state: () => ({
        user: {}
    }),
    actions: {
        init() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.id = user.uid;
                    this.user.email = user.email;
                    this.router.push('/');
                } else {
                    this.user = {};
                    this.router.replace('/auth');
                }
            });
        },
        registerUser(credentials) {
            createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log('error.message', error.message);
                });
        },
        logoutUser() {
            signOut(auth)
                .then(() => {
                    console.log('User signed out');
                })
                .catch((error) => {
                    console.log('error.message', error.message);
                });
        },
        loginUser(credentials) {
            signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log('error.message', error.message);
                });
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreAuth, import.meta.hot));
}
