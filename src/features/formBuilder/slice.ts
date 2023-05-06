// this is the slice of the fromBuilder feature
// the form builder has a state that is a list of form elements
// the form element is a type that has a type, id, options, and title
// the form type is a type that has a list of form elements

import { createSlice } from '@reduxjs/toolkit';
import { FormBuilderType } from './model';

const initialState: FormBuilderType = {
  forms: [],
};

const formBuilderSlice = createSlice({
  name: 'formBuilder',
  initialState,
  reducers: {
    addForm: (state, action) => {
      state.forms.push(action.payload);
    },
    removeForm: (state, action) => {
      const index = state.forms.findIndex(
        (form) => form.formId === action.payload.formId
      );
      if (index !== -1) {
        state.forms.splice(index, 1);
      }
    },
    addElementToForm: (state, action) => {
      const { formId, element } = action.payload;
      const index = state.forms.findIndex((form) => form.formId === formId);
      if (index !== -1) {
        const form = state.forms[index];
        form.elements.push(element);
      }
    },
    removeElementFromForm: (state, action) => {
      const { formId, elementId } = action.payload;
      const index = state.forms.findIndex((form) => form.formId === formId);
      if (index !== -1) {
        const form = state.forms[index];
        form.elements = form.elements.filter(
          (element) => element.id !== elementId
        );
      }
    },
    updateElementValue: (state, action) => {
      const { id, value, formId } = action.payload;
      const form = state.forms.find((form) => form.formId === formId);
      if (form !== undefined) {
        const element = form.elements.find((element) => element.id === id);
        if (element !== undefined) {
          element.value = value;
        }
      }
    },
  },
});

export const formBuilderActions = formBuilderSlice.actions;
export const formBuilderReducer = formBuilderSlice.reducer;
