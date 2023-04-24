import { Button as BaseButton, ButtonProps } from '@mui/material';
import React, { ReactNode } from 'react';
import Text from '../Text';

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
