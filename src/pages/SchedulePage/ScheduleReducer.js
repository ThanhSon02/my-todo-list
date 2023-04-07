import { createSlice } from '@reduxjs/toolkit';
import { parseISO } from 'date-fns';
import { nanoid } from 'nanoid';

const initialState = [
    {
        id: 'ncewio',
        timeStart: '2023-04-22T10:00',
        timeFinish: '2023-04-22T14:00',
        title: 'Meeting',
        place: 'Anomali Office',
        notes: 'nothing',
        done: true,
    },
    {
        id: 'vjvbeiw',
        timeStart: '2023-04-10T10:00',
        timeFinish: '2023-04-10T14:00',
        title: 'Meeting 1',
        place: 'Anomali Office 1',
        notes: 'nothing 1',
        done: false,
    },
    {
        id: 'vewjin',
        timeStart: '2023-04-20T10:00',
        timeFinish: '2023-04-20T14:00',
        title: 'Meeting 2',
        place: 'Anomali Office 2',
        notes: 'nothing 2',
        done: true,
    },
    {
        id: 'vinwer',
        timeStart: '2023-04-22T10:00',
        timeFinish: '2023-04-22T14:00',
        title: 'Meeting 3',
        place: 'Anomali Office 3',
        notes: 'nothing 3',
        done: false,
    },
];

const sortItem = (state) => {
    state.sort((a, b) => {
        return parseISO(a.timeStart) - parseISO(b.timeStart);
    });
};

sortItem(initialState);

export const ScheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        closeScheduleItem: (state, action) => {
            const scheduleItemId = action.payload.id;
            const indexFound = state.findIndex((item) => item?.id === scheduleItemId);
            state[indexFound].done = action.payload.done;
        },
        addScheduleItem: {
            reducer: (state, action) => {
                const newSchedule = action.payload;
                state.push(newSchedule);
                sortItem(state);
            },
            prepare: (newSchedule) => ({
                payload: {
                    ...newSchedule,
                    id: nanoid(),
                },
            }),
        },
    },
});

export const { closeScheduleItem, addScheduleItem } = ScheduleSlice.actions;
export default ScheduleSlice.reducer;
