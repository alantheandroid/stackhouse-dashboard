// this componenet renders a Select from the MUI library
// it renders the select and the options (options must be from MUI too)
// and it must have the same logic of the FormSelect found in
// src\components\FormComponents\FormSelect\index.tsx

import React from 'react';
import { Select as MuiSelect, SelectProps, MenuItem } from '@mui/material';
import { OptionsType } from '../FormFactory/formModel';

type Props = {
  value?: string | number;
  disabled?: boolean;
  onChange: (value: unknown) => void;
  selectProps?: SelectProps;
  options?: OptionsType[];
};

export const Select = (props: Props) => {
  const { value, disabled, onChange, selectProps, options = [] } = props;
  return (
    <MuiSelect
      value={value}
      disabled={disabled}
      onChange={({ target }) => onChange(target.value)}
      {...selectProps}
    >
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
