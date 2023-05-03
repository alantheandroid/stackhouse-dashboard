import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectAppSlice = (state: RootState) => state.app;

export const selectSidebarState = createSelector(
  selectAppSlice,
  (app) => app.sidebar.opened
);

export const selectCheckBoxChecked = createSelector(
  selectAppSlice,
  (app) => app.checkBoxChecked
);

export const selectCheckBoxCheckedById = (checkBoxId: string) =>
  createSelector(selectCheckBoxChecked, (checkBoxChecked) =>
    checkBoxChecked.find((checkBox) => checkBox.checkBoxId === checkBoxId)
  );