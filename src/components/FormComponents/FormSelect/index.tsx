import React from 'react';
import { OptionsType } from '../../FormFactory/formModel';
import { FormElementProps } from '../formElementsProps';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectElementValueByElementId } from '../../../features/formBuilder/selector';
import { formBuilderActions } from '../../../features/formBuilder/slice';
import { Select } from '../../Select';

export const FormSelect = ({
  label,
  disabled,
  isDisabled,
  options,
  elementId,
  formId,
  onChange
}: FormElementProps) => {
  const dispatch = useDispatch();
  const value: unknown = useSelector(
    makeSelectElementValueByElementId(formId, elementId)
  ) 

  const handleDisabled = disabled ?? isDisabled;

  return (
    <div>
      <label>{label}</label>
      <Select
        value={value as string}
        disabled={handleDisabled}
        onChange={(e) => onChange(elementId, e)}
        options={options}
       />
    </div>
  );

};
