// this is the selector of the FormBuilder feature
// the selector is a function that takes the state and returns the state of the feature

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { FormBuilderType } from './model';

const selectFormBuilder = (state: RootState) => state.formBuilder;

export const selectForms = createSelector(
  selectFormBuilder,
  (formBuilder: FormBuilderType) => formBuilder.forms
);
