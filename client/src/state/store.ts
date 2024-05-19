import { configureStore } from '@reduxjs/toolkit';

import gameSlice from './score/gameSlice';

export const store = configureStore({
  reducer: {
    gameStore: gameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
