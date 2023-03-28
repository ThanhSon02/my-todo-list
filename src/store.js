import { configureStore } from '@reduxjs/toolkit';
import ScheduleReducer from './pages/SchedulePage/Schedule.reducer';

export const store = configureStore({
    reducer: {
        schedule: ScheduleReducer,
    },
});
