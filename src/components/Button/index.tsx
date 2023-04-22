import { Button as BaseButton, ButtonProps } from '@mui/material';
import React from 'react';
import Text from '../Text';

type Props = {
  text?: string;
} & Pick<ButtonProps, 'className' | 'variant' | 'fullWidth'>;

function Button({ text, ...props }: Props) {
  return <BaseButton {...props}>{text && <Text>{text}</Text>}</BaseButton>;
}

export default Button;
