import React from 'react';
import { Box } from '@mui/material';
import Text from '../../Text';
import { OptionsType } from '../../FormFactory/formModel';

type Props = {
  label: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  options?: OptionsType[];
  onChange: (value: string) => void;
};

export const FormTextArea = ({
  label,
  value,
  disabled,
  isDisabled,
  onChange,
}: Props) => {
  const handleChange = (value: string) => {
    onChange(value);
  };
  const handleDisabled = disabled ?? isDisabled;
  return (
    <Box flexDirection="column" gap="4px">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      <textarea
        value={value}
        placeholder={label}
        disabled={handleDisabled}
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  );
};
