import { Box } from '@mui/material';
import React from 'react';
import Text from '../../Text';
import { Checkbox } from '../../Checkbox';
import { OptionsType } from '../../FormFactory/formModel';

type Props = {
  label: string;
  value?: string;
  disabled?: boolean;
  isDisabled?: boolean;
  required?: boolean;
  options?: OptionsType[];
  onChange: (value?: boolean) => void;
};

export const FormCheckbox = ({
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
      <Checkbox checked={true} disabled={handleDisabled} onChange={onChange} />
    </Box>
  );
};
