import React from 'react';
import { FormElementProps } from '../formElementsProps';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectElementValueByElementId } from '../../../features/formBuilder/selector';
import { formBuilderActions } from '../../../features/formBuilder/slice';
import { Box } from '@mui/material';
import Text from '../../Text';
import Select from '../../Select';

export const FormSelect = ({
  label,
  disabled,
  isDisabled,
  options,
  elementId,
}: FormElementProps) => {
  const dispatch = useDispatch();
  const value: string | undefined = useSelector(
    makeSelectElementValueByElementId(elementId)
  );

  const handleChange = (value: string) => {
    dispatch(formBuilderActions.updateElementValue({ elementId, value }));
  };
  const handleDisabled = disabled ?? isDisabled;
  return (
    <Box flexDirection="column" gap="4px" alignItems="center">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      {/* <select
        value={value}
        disabled={handleDisabled}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options?.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select> */}
      <Select
        value={value}
        disabled={handleDisabled}
        onChange={handleChange}
        options={options}
      />
    </Box>
  );
};
