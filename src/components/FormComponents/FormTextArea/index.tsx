import React from 'react';
import { Box } from '@mui/material';
import Text from '../../Text';
import { OptionsType } from '../../FormFactory/formModel';
import { FormElementProps } from '../formElementsProps';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectElementValueByElementId } from '../../../features/formBuilder/selector';
import { formBuilderActions } from '../../../features/formBuilder/slice';

export const FormTextArea = ({
  label,
  disabled,
  isDisabled,
  elementId
}: FormElementProps) => {
  const dispatch = useDispatch();
  const value: string | undefined = useSelector(
    makeSelectElementValueByElementId(elementId)
  ) satisfies string | undefined;

  const handleChange = (value: string) => {
    dispatch(formBuilderActions.updateElementValue({ elementId, value }));
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
