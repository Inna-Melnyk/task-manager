import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { setStatusFilter } from './action';

const filtersInitialState = {
  status: statusFilters.all,
};

// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

export const filtersReducer = createReducer(filtersInitialState, builder =>
  builder.addCase(setStatusFilter, (state, action) => {
    // ✅ Immer замінить це на операцію оновлення
    state.status = action.payload;
    // return {
    //   ...state,
    //   status: action.payload,
    // };
  })
);
