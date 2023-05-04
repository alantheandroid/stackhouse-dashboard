import React, { KeyboardEvent } from 'react';
import { InputProps, Input as MuiInput } from '@mui/material';

type Props = {
  value?: string | number;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  inputType?: string;
  onChange?: (value: string) => void;
  onBlur?: (value?: string) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  inputProps?: InputProps;
};

export const Input = ({
  value,
  placeholder,
  disabled,
  className,
  inputType,
  onChange,
  onBlur,
  onKeyUp,
  inputProps,
}: Props) => {
  return (
    <MuiInput
      type={inputType}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      className={className}
      onChange={({ target }) => onChange?.(target.value)}
      onBlur={({ target }) => onBlur?.(target.value)}
      onKeyUp={onKeyUp}
      {...inputProps}
    />
  );
};
