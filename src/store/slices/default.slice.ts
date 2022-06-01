import { createSlice } from '@reduxjs/toolkit';

export interface IDefaultSlice {
  userId: string | null | undefined
}

const initialState: IDefaultSlice = {
  userId: null
};
const defaultSlice = createSlice({
  name: 'asset',
  initialState,
  reducers: {
    login(state) {
      state.userId = "1"
    }
  },
});

export default defaultSlice;
export const defaultActions = defaultSlice.actions;
