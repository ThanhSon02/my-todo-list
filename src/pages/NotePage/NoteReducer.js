import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { parseISO } from 'date-fns';

const initialState = {
    noteList: [
        {
            id: 'vnewo',
            title: 'need for this month',
            date: '2023-04-22',
            pin: true,
        },
        {
            id: 'nfk',
            title: 'need for this month',
            date: '2023-04-22',
            pin: false,
        },
        {
            id: 'ncewn',
            title: 'need for this month',
            date: '2023-04-22',
            pin: true,
        },
        {
            id: 'fpeo',
            title: 'need for this month',
            date: '2023-04-22',
            pin: false,
        },
    ],
    editingNote: null,
};

const sortItem = (state) => {
    state.sort((a, b) => {
        return parseISO(b.date) - parseISO(a.date);
    });
};

sortItem(initialState.noteList);

export const NoteReducer = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNoteItem: {
            reducer: (state, action) => {
                const newNoteItem = action.payload;
                state.noteList.push(newNoteItem);
                sortItem(state.noteList);
            },
            prepare: (newNoteItem) => ({
                payload: { ...newNoteItem, id: nanoid() },
            }),
        },
        deleteNote: (state, action) => {
            const noteId = action.payload;
            const indexFound = state.noteList.findIndex((noteItem) => noteItem?.id === noteId);
            state.noteList.splice(indexFound, 1);
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
        },
    },
});

export const { addNoteItem, deleteNote, startEditingNote, finishEditingNote } = NoteReducer.actions;
export default NoteReducer.reducer;
