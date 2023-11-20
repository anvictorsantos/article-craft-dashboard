<template>
    <div class="modal is-active p-2">
        <div class="modal-background"></div>
        <div
            ref="modalCardRef"
            class="modal-card"
        >
            <header class="modal-card-head">
                <p class="modal-card-title">Delete Article</p>
                <button
                    class="delete"
                    aria-label="close"
                    @click="closeModal"
                ></button>
            </header>
            <section class="modal-card-body">
                Are you sure you want to delete this note?
            </section>
            <footer
                ref="modalDeleteRef"
                class="modal-card-foot is-justify-content-flex-end"
            >
                <button
                    class="button"
                    @click="closeModal"
                >
                    Cancel
                </button>
                <button
                    class="button is-danger"
                    @click="storeNotes.deleteNote(noteId)"
                >
                    Delete
                </button>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useStoreNotes } from '@/stores/storeNotes';

defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    noteId: {
        type: String,
        required: true
    }
});

const emit = defineEmits(['update:modelValue']);

const storeNotes = useStoreNotes();

const closeModal = () => {
    emit('update:modelValue', false);
};

const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

const handleKeyboard = (e) => {
    if (e.key === 'Escape') closeModal();
};

onMounted(() => {
    document.addEventListener('keyup', handleKeyboard);
});

onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard);
});
</script>
