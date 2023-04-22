import { Typography, TypographyProps } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
} & Pick<TypographyProps, 'className' | 'variant' | 'color' | 'fontSize'>;

function Text({ children, ...props }: Props) {
  return <Typography {...props}>{children}</Typography>;
}

export default Text;
