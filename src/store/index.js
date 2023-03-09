import { configureStore } from '@reduxjs/toolkit';

import { restoApi } from './reducers/restoraunt.reducer';

export const store = configureStore({
  reducer: {
    [restoApi.reducerPath]: restoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restoApi.middleware),
});
