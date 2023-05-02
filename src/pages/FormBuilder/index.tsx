// this is the page of the Form Builder
// This page cointains the form builder and the form preview
// The form preview is a component that renders the form created by the form builder
// the form builder is a component that renders the form elements

import React from 'react';
import { FormFactory } from '../../components/FormFactory';
import { mockForm } from './mock';

export const FormBuilder = () => {
  return (
    <div>
      <FormFactory form={mockForm} />
    </div>
  );
};
