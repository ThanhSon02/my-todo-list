import { configureStore } from '@reduxjs/toolkit';
import ScheduleReducer from './pages/SchedulePage/ScheduleReducer';

export const store = configureStore({
    reducer: {
        schedule: ScheduleReducer,
    },
});
