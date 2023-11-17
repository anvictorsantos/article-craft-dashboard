<template>
    <div class="stats">
        <table class="is-fullwidth table">
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
    </div>
</template>

<script setup>
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();
</script>
