<template>
    <div class="notes">
        <div class="card has-background-success-dark mb-5 p-4">
            <div class="field">
                <div class="control">
                    <textarea
                        ref="newNoteRef"
                        v-model="newNote"
                        class="textarea"
                        placeholder="Add a new  note"
                    ></textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <button
                        class="button is-link has-background-success"
                        :disabled="!newNote"
                        @click="addNote"
                    >
                        Add New Note
                    </button>
                </div>
            </div>
        </div>

        <Note
            v-for="note in storeNotes.notes"
            :key="note.id"
            :note="note"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';
import { useStoreNotes } from '@/stores/storeNotes';

const storeNotes = useStoreNotes();

const newNote = ref('');
const newNoteRef = ref(null);

const addNote = () => {
    storeNotes.addNote(newNote.value);
    newNote.value = '';
    newNoteRef.value.focus();
};
</script>
