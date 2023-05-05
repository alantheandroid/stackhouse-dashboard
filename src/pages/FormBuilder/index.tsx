// this is the page of the Form Builder
// This page cointains the form builder and the form preview
// The form preview is a component that renders the form created by the form builder
// the form builder is a component that renders the form elements

import React, { useEffect, useState } from 'react';
import { FormFactory } from '../../components/FormFactory';
import { mockForm } from './mock';
import { useDispatch, useSelector } from 'react-redux';
import { CompoundMsgType } from '../../features/compoundMsg/model';
import {
  FormElementType,
  FormType,
} from '../../components/FormFactory/formModel';
import { formBuilderActions } from '../../features/formBuilder/slice';
import { generateId } from '../../utils/formIdGenerator';
import { makeSelectFormById } from '../../features/formBuilder/selector';

type FormBuilderProps = {
  valueFromState: CompoundMsgType | undefined;
};

export const FormBuilder = ({ valueFromState }: FormBuilderProps) => {
  const dispatch = useDispatch();
  const formFromState = useSelector(makeSelectFormById(mockForm.formId));
  const [form, setForm] = useState<FormType>();

  useEffect(() => {
    dispatch(formBuilderActions.addForm(mockForm));
  }, []);

  useEffect(() => {
    if (formFromState !== undefined) {
      setForm(formFromState);
    }
  }, [formFromState]);

  const handleAddInput = () => {
    const newElement: FormElementType = {
      type: 'input',
      id: generateId(),
      label: 'New Input',
      inputType: 'text',
      required: false,
      disabled: false,
      isDisabled: false,
      value: '',
    };
    const DTO = { formId: form?.formId, element: newElement };
    dispatch(formBuilderActions.addElementToForm(DTO));
  };

  return (
    <div>
      <FormFactory form={form} value={valueFromState} />
      <button onClick={handleAddInput}>Add an input</button>
    </div>
  );
};
