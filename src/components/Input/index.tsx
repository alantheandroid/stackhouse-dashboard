import { TextField, TextFieldProps } from '@mui/material';
import React from 'react';

type Props = {} & TextFieldProps;

function Input({ children, ...props }: Props) {
  return <TextField {...props}>{children}</TextField>;
}

export default Input;
