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
                    role="button"
                    class="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    @click.prevent="showMobileNav = !showMobileNav"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div
                id="navbarBasicExample"
                :class="{ 'is-active': showMobileNav }"
                class="navbar-menu"
            >
                <div class="navbar-end">
                    <RouterLink
                        to="/"
                        class="navbar-item"
                        active-class="is-active"
                        @click="showMobileNav = false"
                    >
                        Notes
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
import { ref } from 'vue';

const showMobileNav = ref(false);
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
