import { createAction } from '@reduxjs/toolkit';

export const setStatusFilter = createAction('filters/setStatusFilter');

// export const setStatusFilter = value => {
//   return {
//     type: 'filters/setStatusFilter',
//     payload: value,
//   };
// };
