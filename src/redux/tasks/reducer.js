import { createReducer } from '@reduxjs/toolkit';
import { addTask, deleteTask, toggleCompleted } from './action';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, builder => {
  builder
    .addCase(addTask, (state, action) => {
      // ✅ Immer замінить це на операцію оновлення

      state.push(action.payload);

      //   return [...state, action.payload];
    })
    .addCase(deleteTask, (state, action) => {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
      //   return state.filter(task => task.id !== action.payload);
    })
    .addCase(toggleCompleted, (state, action) => {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
        }
      }

      //   return state.map(task => {
      //     if (task.id !== action.payload) {
      //       return task;
      //     }
      //     return { ...task, completed: !task.completed };
      //   });
    });
});

// Використовуємо initialState як значення стану за умовчанням
// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];
//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };
