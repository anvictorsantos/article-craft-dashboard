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
            v-for="note in notes"
            :key="note.id"
            :note="note"
            @deleteClicked="deleteNote"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';

const newNote = ref('');
const newNoteRef = ref(null);

const notes = ref([
    {
        id: 'id1',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
        id: 'id2',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
    }
]);

const addNote = () => {
    let currentDate = new Date().getTime(),
        id = currentDate.toString();

    let note = {
        id,
        content: newNote.value
    };

    notes.value.unshift(note);

    newNote.value = '';
    newNoteRef.value.focus();
};

const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => {
        return note.id !== idToDelete;
    });
};
</script>
