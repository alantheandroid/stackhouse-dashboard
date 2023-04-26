import React, { ReactNode } from 'react';
import { Button as BaseButton, ButtonProps } from '@mui/material';

type Props = {
  children?: ReactNode;
} & Pick<
  ButtonProps,
  'className' | 'variant' | 'fullWidth' | 'startIcon' | 'endIcon'
>;

function Button({ children, ...props }: Props) {
  return <BaseButton {...props}>{children}</BaseButton>;
}

export default Button;
