<template>
    <div class="notes">
        <AddEditNote
            ref="addEditNoteRef"
            v-model="newNote"
            placeholder="Add a new note"
        >
            <template #buttons>
                <button
                    class="button is-link has-background-success"
                    :disabled="!newNote"
                    @click="addNote"
                >
                    Add New Note
                </button>
            </template>
        </AddEditNote>
        <NoteCard
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import NoteCard from '@/components/notes/NoteCard.vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters';

const storeNotes = useStoreNotes();

const newNote = ref('');
const addEditNoteRef = ref(null);

const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = '';
    addEditNoteRef.value.focusTextArea();
};

useWatchCharacters(newNote);
</script>
