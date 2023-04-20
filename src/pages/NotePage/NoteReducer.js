import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { parseISO } from 'date-fns';

const initialState = {
    noteList: [
        {
            id: 'vnewo',
            title: "this morning's meeting, we have to improve the quality of office facilities and another...",
            date: '2023-04-22',
            pin: true,
        },
        {
            id: 'nfk',
            title: 'need for this month:-clothes-snack...',
            date: '2023-04-17',
            pin: true,
        },
        {
            id: 'ncewn',
            title: "Message from Liam:Don't forget to complete assignments on Tuesday",
            date: '2023-04-30',
            pin: true,
        },
        {
            id: 'fpeo',
            title: 'need for this week',
            date: '2023-04-26',
            pin: false,
        },
    ],
    editingNote: null,
};

const sortItem = (state) => {
    state.sort((a, b) => {
        if (a.pin && !b.pin) {
            return -1;
        } else if (!a.pin && b.pin) {
            return 1;
        } else {
            return parseISO(b.date) - parseISO(a.date);
        }
    });
};

sortItem(initialState.noteList);

const reLoadLocalStorage = (data) => {
    const currentData = JSON.parse(window.localStorage.getItem('AppData'));

    window.localStorage.setItem('AppData', JSON.stringify({ ...currentData, noteList: data }));
};

export const NoteReducer = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNoteItem: {
            reducer: (state, action) => {
                const newNoteItem = action.payload;
                state.noteList.push(newNoteItem);
                sortItem(state.noteList);
                reLoadLocalStorage(state.noteList);
            },
            prepare: (newNoteItem) => ({
                payload: { ...newNoteItem, id: nanoid() },
            }),
        },
        deleteNote: (state, action) => {
            const noteId = action.payload;
            const indexFound = state.noteList.findIndex((noteItem) => noteItem?.id === noteId);
            state.noteList.splice(indexFound, 1);
            reLoadLocalStorage(state.noteList);
        },
        startEditingNote: (state, action) => {
            const noteId = action.payload;
            const indexFound = state.noteList.findIndex((noteItem) => noteItem?.id === noteId);
            state.editingNote = state.noteList[indexFound];
        },
        finishEditingNote: (state, action) => {
            const noteId = action.payload.id;
            state.noteList.some((noteItem, index) => {
                if (noteItem?.id === noteId) {
                    state.noteList[index] = action.payload;
                    return true;
                }
                return false;
            });
            sortItem(state.noteList);
            state.editingNote = null;
            reLoadLocalStorage(state.noteList);
        },
    },
});

export const { addNoteItem, deleteNote, startEditingNote, finishEditingNote } = NoteReducer.actions;
export default NoteReducer.reducer;
