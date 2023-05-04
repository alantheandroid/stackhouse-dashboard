// this is the page of the Form Builder
// This page cointains the form builder and the form preview
// The form preview is a component that renders the form created by the form builder
// the form builder is a component that renders the form elements

import React, { useEffect } from 'react';
import { FormFactory } from '../../components/FormFactory';
import { mockForm } from './mock';
import { useDispatch } from 'react-redux';
import { CompoundMsgType } from '../../features/compoundMsg/model';
import { FormElementType } from '../../components/FormFactory/formModel';
import { formBuilderActions } from '../../features/formBuilder/slice';

type FormBuilderProps = {
  valueFromState: CompoundMsgType | undefined;
};

export const FormBuilder = ({ valueFromState }: FormBuilderProps) => {
  return (
    <div>
      <FormFactory form={mockForm} value={valueFromState} />
    </div>
  );
};
