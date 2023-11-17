<template>
    <div class="edit-note">
        <AddEditNote
            ref="addEditNoteRef"
            v-model="noteContent"
            bg-color="link"
            placeholder="Edit note"
            label="Edit Note"
        >
            <template #buttons>
                <button
                    class="button is-link is-light mr-2"
                    @click="$router.back()"
                >
                    Cancel
                </button>
                <button
                    class="button is-link has-background-link"
                    :disabled="!noteContent"
                    @click="handleSaveClicked"
                >
                    Save Note
                </button>
            </template>
        </AddEditNote>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes';

const route = useRoute();
const router = useRouter();

const storeNotes = useStoreNotes();

const noteContent = ref('');

noteContent.value = storeNotes.getNoteContent(route.params.id);

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value);
    router.push('/');
};
</script>
