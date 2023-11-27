<template>
    <nav
        class="navbar is-success"
        role="navigation"
        aria-label="main navigation"
    >
        <div class="is-max-desktop container px-2">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-monospace">
                    Articles
                </div>

                <a
                    ref="navbarBurgerRef"
                    aria-expanded="false"
                    aria-label="menu"
                    class="navbar-burger"
                    :class="{ 'is-active': showMobileNav }"
                    data-target="navbarBasicExample"
                    role="button"
                    @click.prevent="showMobileNav = !showMobileNav"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                id="navbarBasicExample"
                ref="navbarMenuRef"
                :class="{ 'is-active': showMobileNav }"
                class="navbar-menu"
            >
                <div class="navbar-start">
                    <button
                        v-if="storeAuth.user.id"
                        class="button is-small is-info mt-3 ml-3"
                        @click="logout"
                    >
                        Log out {{ storeAuth.user.email }}
                    </button>
                </div>
                <div class="navbar-end">
                    <RouterLink
                        to="/"
                        class="navbar-item"
                        active-class="is-active"
                        @click="showMobileNav = false"
                    >
                        Articles
                    </RouterLink>
                    <RouterLink
                        to="/stats"
                        class="navbar-item"
                        active-class="is-active"
                        @click="showMobileNav = false"
                    >
                        Stats
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { useStoreAuth } from '@/stores/storeAuth';
import { onClickOutside } from '@vueuse/core';
import { ref } from 'vue';

const storeAuth = useStoreAuth();

const showMobileNav = ref(false);

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(
    navbarMenuRef,
    () => {
        showMobileNav.value = false;
    },
    {
        ignore: [navbarBurgerRef]
    }
);

const logout = () => {
    showMobileNav.value = false;
    storeAuth.logoutUser();
};
</script>

<style>
@media (max-width: 1032px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>
