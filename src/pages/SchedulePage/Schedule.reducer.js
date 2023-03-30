import { createSlice } from '@reduxjs/toolkit';

const initialState1 = [
    {
        date: new Date(2023, 2, 22),
        scheduleItem: [
            {
                title: 'Metting',
                time: '07.00 am - 08.00 am',
                place: 'Anomali Office',
                note: 'Nothing',
                checked: true,
            },
            {
                title: 'School',
                time: '07.00 am - 08.00 am',
                place: 'Anomali Office',
                note: 'Nothing',
                checked: false,
            },
        ],
    },
    {
        date: new Date(2023, 2, 22),
        scheduleItem: [
            {
                title: 'Metting',
                time: '07.00 am - 08.00 am',
                place: 'Anomali Office',
                note: 'Nothing',
                checked: true,
            },
        ],
    },
    {
        date: new Date(2023, 3, 20),
        scheduleItem: [
            {
                title: 'Metting',
                time: '07.00 am - 08.00 am',
                place: 'Anomali Office',
                note: 'Nothing',
                checked: false,
            },
        ],
    },
];

const initialState = [
    {
        id: 0,
        startDate: new Date(2023, 3, 22, 10, 0),
        endDate: new Date(2023, 2, 22, 14, 0),
        title: 'Meeting',
        place: 'Anomali Office',
        notes: 'nothing',
        done: true,
    },
    {
        id: 1,
        startDate: new Date(2023, 2, 23, 10, 0),
        endDate: new Date(2023, 2, 23, 14, 0),
        title: 'Meeting 1',
        place: 'Anomali Office 1',
        notes: 'nothing 1',
        done: false,
    },
    {
        id: 2,
        startDate: new Date(2023, 2, 23, 9, 0),
        endDate: new Date(2023, 2, 24, 14, 20),
        title: 'Meeting 2',
        place: 'Anomali Office 2',
        notes: 'nothing 2',
        done: true,
    },
    {
        id: 3,
        startDate: new Date(2023, 2, 25, 10, 0),
        endDate: new Date(2023, 2, 25, 14, 0),
        title: 'Meeting 3',
        place: 'Anomali Office 3',
        notes: 'nothing 3',
        done: false,
    },
];

initialState.sort((d1, d2) => {
    return d1.startDate - d2.startDate;
});

export const ScheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducer: {
        closeScheduleItem: (state, action) => {
            const scheduleItemId = action.payload.id;
            state.schedule.some((scheduleItem, index) => {
                if (scheduleItem.id === scheduleItemId) {
                    state.schedule[index] = action.payload;
                    return true;
                }
                return false;
            });
        },
    },
});

export const { closeScheduleItem } = ScheduleSlice.actions;
export default ScheduleSlice.reducer;
