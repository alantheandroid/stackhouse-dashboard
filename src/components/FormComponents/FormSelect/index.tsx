import React from 'react';
import { OptionsType } from '../../FormFactory/formModel';

type Props = {
  label: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  options?: OptionsType[]
  onChange: (value: string) => void;
};

export const FormSelect = ({
  label,
  value,
  disabled,
  isDisabled,
  options,
  onChange,
}: Props) => {
  const handleChange = (value: string) => {
    onChange(value);
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
