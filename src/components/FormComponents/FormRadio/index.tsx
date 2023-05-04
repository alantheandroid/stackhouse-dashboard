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
}: FormElementProps) => {
  const handleDisabled = disabled ?? isDisabled;
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState<string | boolean | undefined>(
    useSelector(makeSelectElementValueByElementId(elementId))
  );

  const handleChange = (value: string) => {
    setSelectedValue(value);
    dispatch(
      formBuilderActions.updateElementValue({
        elementId,
        value: selectedValue === value,
      })
    );
  };

  return (
    <Box flexDirection="column" gap="4px" alignItems="center">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      {options?.map((option: Option) => (
        <Box key={option.value}>
          <Text>{option.label}</Text>
          <Radio
            checked={selectedValue === option.value}
            disabled={handleDisabled}
            name={name}
            onChange={() => handleChange(option.value)}
          />
        </Box>
      ))}
    </Box>
  );
};
