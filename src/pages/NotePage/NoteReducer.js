import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: 'vnewo',
        content: 'need for this month',
        date: '2023-04-22',
        pin: true,
    },
    {
        id: 'nfk',
        content: 'need for this month',
        date: '2023-04-22',
        pin: false,
    },
    {
        id: 'ncewn',
        content: 'need for this month',
        date: '2023-04-22',
        pin: true,
    },
    {
        id: 'fpeo',
        content: 'need for this month',
        date: '2023-04-22',
        pin: false,
    },
];

export const NoteReducer = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNoteItem: (state, action) => {
            const newNoteItem = action.payload;
            state.push(newNoteItem);
        },
    },
});

export const {} = NoteReducer.actions;
export default NoteReducer.reducer;
