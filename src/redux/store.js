import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/taskSlice';
import { filtersReducer } from './filters/filterSlice';



export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
