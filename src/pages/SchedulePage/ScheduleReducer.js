import { createSlice } from '@reduxjs/toolkit';
import { parseISO } from 'date-fns';

const initialState = [
    {
        id: 0,
        startDate: '2023-04-22T10:00',
        endDate: '2023-04-22T14:00',
        title: 'Meeting',
        place: 'Anomali Office',
        notes: 'nothing',
        done: true,
    },
    {
        id: 1,
        startDate: '2023-04-10T10:00',
        endDate: '2023-04-10T14:00',
        title: 'Meeting 1',
        place: 'Anomali Office 1',
        notes: 'nothing 1',
        done: false,
    },
    {
        id: 2,
        startDate: '2023-04-20T10:00',
        endDate: '2023-04-20T14:00',
        title: 'Meeting 2',
        place: 'Anomali Office 2',
        notes: 'nothing 2',
        done: true,
    },
    {
        id: 3,
        startDate: '2023-04-22T10:00',
        endDate: '2023-04-22T14:00',
        title: 'Meeting 3',
        place: 'Anomali Office 3',
        notes: 'nothing 3',
        done: false,
    },
];

initialState.sort((a, b) => {
    return parseISO(a.startDate) - parseISO(b.startDate);
});

export const ScheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        closeScheduleItem: (state, action) => {
            const scheduleItemId = action.payload.id;
            const indexFound = state.findIndex((item) => item?.id === scheduleItemId);
            state[indexFound].done = action.payload.done;
        },
    },
});

export const { closeScheduleItem } = ScheduleSlice.actions;
export default ScheduleSlice.reducer;
// state.schedule?.some((item, index) => {
//     if (item.id === scheduleItemId) {
//         state.schedule[index].done = !action.payload.done;
//         return true;
//     }
//     return false;
// });
