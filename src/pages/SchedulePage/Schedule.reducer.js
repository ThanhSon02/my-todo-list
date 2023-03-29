import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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

export const ScheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducer: {},
});

export const {} = ScheduleSlice.actions;
export default ScheduleSlice.reducer;
