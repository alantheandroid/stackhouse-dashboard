import React from 'react';
import { Box } from '@mui/material';
import Text from '../../Text';
import { Input } from '../../Input';
import { OptionsType } from '../../FormFactory/formModel';

// this component should have render the form elements of type radio
// it must have the same structure of the FormCheckbox component
// with the difference that it should render a radio instead of a checkbox
// and it should use the Input component defined in the components folder
// instead of the native html input

type Props = {
  label: string;
  value?: string;
  disabled?: boolean;
  isDisabled?: boolean;
  required?: boolean;
  options?: OptionsType[];
  onChange: (value?: string) => void;
};

export const FormRadio = ({
  label,
  value,
  disabled,
  isDisabled,
  onChange,
}: Props) => {
  const handleDisabled = disabled ?? isDisabled;

  return (
    <Box flexDirection="column" gap="4px" alignItems="center">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      <Input disabled={handleDisabled} onChange={onChange} />
    </Box>
  );
};
