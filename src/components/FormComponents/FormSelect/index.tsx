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
  formId
}: FormElementProps) => {
  const dispatch = useDispatch();
  const value: unknown = useSelector(
    makeSelectElementValueByElementId(formId, elementId)
  ) 

  const handleChange = (e: unknown) => {
    const value = e as string
    dispatch(formBuilderActions.updateElementValue({ id: elementId, value }));
  };

  const handleDisabled = disabled ?? isDisabled;

  return (
    <div>
      <label>{label}</label>
      <Select
        value={value as string}
        disabled={handleDisabled}
        onChange={handleChange}
        options={options}
       />
    </div>
  );

};
