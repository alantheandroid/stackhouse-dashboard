import React from 'react';
import { Box } from '@mui/material';
import Text from '../../Text';
import { Input } from '../../Input';
import { OptionsType } from '../../FormFactory/formModel';
import { FormElementProps } from '../formElementsProps';


export const FormRadio = ({
  label,
  disabled,
  isDisabled,
}: FormElementProps) => {
  const handleDisabled = disabled ?? isDisabled;

  return (
    <Box flexDirection="column" gap="4px" alignItems="center">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      <Input disabled={handleDisabled} onChange={(e) => console.log(e)} />
    </Box>
  );
};
