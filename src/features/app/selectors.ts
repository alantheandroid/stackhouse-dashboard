import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectAppSlice = (state: RootState) => state.app;

export const selectSidebarState = createSelector(
  selectAppSlice,
  (app) => app.sidebar.opened
);
