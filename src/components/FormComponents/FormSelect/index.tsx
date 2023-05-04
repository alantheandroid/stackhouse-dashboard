import React from 'react';
import { OptionsType } from '../../FormFactory/formModel';
import { FormElementProps } from '../formElementsProps';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectElementValueByElementId } from '../../../features/formBuilder/selector';
import { formBuilderActions } from '../../../features/formBuilder/slice';

export const FormSelect = ({
  label,
  disabled,
  isDisabled,
  options,
  elementId
}: FormElementProps) => {
  const dispatch = useDispatch();
  const value: string | undefined = useSelector(
    makeSelectElementValueByElementId(elementId)
  ) satisfies string | undefined;

  const handleChange = (value: string) => {
    dispatch(formBuilderActions.updateElementValue({ elementId, value }));
  };
  const handleDisabled = disabled ?? isDisabled;
  return (
    <div>
      <label>{label}</label>
      <select
        value={value}
        disabled={handleDisabled}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options?.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
