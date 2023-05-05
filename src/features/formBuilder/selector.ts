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

export const makeSelectFormById = (formId: string) =>
  createSelector(selectForms, (forms) => {
    return forms.find((form) => form.formId === formId);
  });

export const makeSelectElementValueByElementId = (
  formId: string,
  elementId: string
) =>
  createSelector(selectForms, (forms) => {
    const form = forms.find((form) => form.formId === formId);
    if (form !== undefined) {
      const element = form.elements.find((element) => element.id === elementId);
      if (element !== undefined) {
        return element.value;
      }
    }
    return undefined;
  });
