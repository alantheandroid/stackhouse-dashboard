import React from 'react';
import { CheckboxProps, Checkbox as MuiCheckbox } from '@mui/material';

type Props = {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
  checkboxProps?: CheckboxProps;
};

export const Checkbox = (props: Props) => {
  const { checked, disabled, onChange, checkboxProps } = props;
  return (
    <MuiCheckbox
      checked={checked}
      disabled={disabled}
      onChange={({ target }) => onChange?.(target.checked)}
      {...checkboxProps}
    />
  );
};
