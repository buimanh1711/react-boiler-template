import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { defaultSlice } from './slices';

const rootReducer = combineReducers({
  asset: defaultSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export default store;
