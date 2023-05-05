import React, { useState } from 'react';
import { Box } from '@mui/material';
import Text from '../../Text';
import { Input } from '../../Input';
import { OptionsType } from '../../FormFactory/formModel';
import { FormElementProps } from '../formElementsProps';
import { useDispatch, useSelector } from 'react-redux';
import {
  makeSelectElementValueByElementId,
  selectForms,
} from '../../../features/formBuilder/selector';
import { formBuilderActions } from '../../../features/formBuilder/slice';
import { Radio } from '../../Radio';

type Option = {
  label: string;
  value: string;
};

export const FormRadio = ({
  label,
  disabled,
  isDisabled,
  elementId,
  name,
  options,
  formId,
  onChange
}: FormElementProps) => {
  const handleDisabled = disabled ?? isDisabled;
  const dispatch = useDispatch();
  const value = useSelector(
    makeSelectElementValueByElementId(formId, elementId)
  );

  return (
    <Box flexDirection="column" gap="4px" alignItems="center">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      {options?.map((option: Option) => (
        <Box key={option.value}>
          <Text>{option.label}</Text>
          <Radio
            checked={value === option.value}
            disabled={handleDisabled}
            name={name}
            onChange={(e) => onChange(elementId, e)}
          />
        </Box>
      ))}
    </Box>
  );
};
