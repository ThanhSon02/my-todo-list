import { createSlice } from '@reduxjs/toolkit';
import { parseISO } from 'date-fns';
import { nanoid } from 'nanoid';

const initialState = {
    scheduleList: [
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
    ],
    editingSchedule: null,
};

const sortItem = (state) => {
    state.sort((a, b) => {
        return parseISO(a.timeStart) - parseISO(b.timeStart);
    });
};

const reLoadLocalStorage = (data) => {
    const currentData = JSON.parse(window.localStorage.getItem('AppData'));
    window.localStorage.setItem('AppData', JSON.stringify({ ...currentData, scheduleList: data }));
};

sortItem(initialState.scheduleList);

export const ScheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        closeScheduleItem: (state, action) => {
            const scheduleItemId = action.payload.id;
            const indexFound = state.scheduleList.findIndex((item) => item?.id === scheduleItemId);
            const itemFound = state.scheduleList.find((item) => item?.id === scheduleItemId);
            itemFound.done = action.payload.done;
            state.scheduleList[indexFound] = itemFound;
            // reLoadLocalStorage(state.scheduleList);
        },
        addScheduleItem: {
            reducer: (state, action) => {
                const newSchedule = action.payload;
                state.scheduleList.push(newSchedule);
                sortItem(state.scheduleList);
                // reLoadLocalStorage(state.scheduleList);
            },
            prepare: (newSchedule) => ({
                payload: {
                    ...newSchedule,
                    id: nanoid(),
                },
            }),
        },
        startEditingSchedule: (state, action) => {
            const scheduleItemId = action.payload;
            const indexFound = state.scheduleList.findIndex((item) => item?.id === scheduleItemId);
            state.editingSchedule = state.scheduleList[indexFound];
        },
        finishEditingSchedule: (state, action) => {
            const scheduleId = action.payload.id;
            state.scheduleList.some((scheduleItem, index) => {
                if (scheduleItem.id === scheduleId) {
                    state.scheduleList[index] = action.payload;
                    return true;
                }
                return false;
            });
            state.editingSchedule = null;
            sortItem(state.scheduleList);
            // reLoadLocalStorage(state.scheduleList);
        },
        deleteSchedule: (state, action) => {
            const scheduleItemId = action.payload;
            const indexFound = state.scheduleList.findIndex((item) => item?.id === scheduleItemId);
            state.scheduleList.splice(indexFound, 1);
            // reLoadLocalStorage(state.scheduleList);
        },
    },
});

export const { closeScheduleItem, addScheduleItem, startEditingSchedule, deleteSchedule, finishEditingSchedule } =
    ScheduleSlice.actions;
export default ScheduleSlice.reducer;
