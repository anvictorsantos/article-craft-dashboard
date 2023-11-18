<template>
    <div class="stats">
        <table class="is-fullwidth table">
            <caption>
                Articles Stats Table
            </caption>
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of Notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of Characters (off all notes)</td>
                    <td>{{ storeNotes.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>
        <input
            v-model="loveArticles"
            v-autofocus
            class="input"
            type="text"
            placeholder="Do you love articles??"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from '@/directives/vAutofocus';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeNotes = useStoreNotes();

const loveArticles = ref('');

useWatchCharacters(loveArticles, 50);
</script>
