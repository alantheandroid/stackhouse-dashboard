import React from 'react';
import { FormElementType } from './formModel';
import { FormInput } from '../FormComponents/FormInput';
import { FormSelect } from '../FormComponents/FormSelect';
import { FormRadio } from '../FormComponents/FormRadio';
import { FormCheckbox } from '../FormComponents/FormCheckbox';
import { FormTextArea } from '../FormComponents/FormTextArea';


export const elementGeneratorMap = {
  input: FormInput,
  checkbox: FormCheckbox,
  radio: FormRadio,
  select: FormSelect,
  textarea: FormTextArea,
};
