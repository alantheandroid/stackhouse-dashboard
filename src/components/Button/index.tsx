import { Button as BaseButton, ButtonProps } from '@mui/material';
import React from 'react';
import Text from '../Text';

type Props = {
  text?: string;
} & Pick<ButtonProps, 'variant'>;

function Button({ text, ...props }: Props) {
  return (
    <BaseButton {...props}>
      {text && <Text variant="body1">{text}</Text>}
    </BaseButton>
  );
}

export default Button;
