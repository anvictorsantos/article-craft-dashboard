import { defineStore, acceptHMRUpdate } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
    state: () => ({
        notes: [
            {
                id: 'id1',
                content:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            },
            {
                id: 'id2',
                content:
                    'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
            }
        ]
    }),
    actions: {
        addNote(newNoteContent) {
            let currentDate = new Date().getTime(),
                id = currentDate.toString();
            let note = {
                id,
                content: newNoteContent
            };
            this.notes.unshift(note);
        },
        deleteNote(idToDelete) {
            this.notes = this.notes.filter((note) => {
                return note.id !== idToDelete;
            });
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
