import { configureStore } from '@reduxjs/toolkit';
import ScheduleReducer from './pages/SchedulePage/ScheduleReducer';
import NoteReducer from './pages/NotePage/NoteReducer';

export const store = configureStore({
    reducer: {
        schedule: ScheduleReducer,
        note: NoteReducer,
    },
});
