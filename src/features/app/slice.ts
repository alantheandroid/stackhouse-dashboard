import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './model';

const initialState: AppState = {
  sidebar: {
    opened: false,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.opened = !state.sidebar.opened;
    },
  },
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
