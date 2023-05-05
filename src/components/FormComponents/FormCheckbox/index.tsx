import { Box } from '@mui/material';
import React from 'react';
import Text from '../../Text';
import { Checkbox } from '../../Checkbox';
import { FormElementProps } from '../formElementsProps';
import {
  makeSelectElementValueByElementId,
  selectForms,
} from '../../../features/formBuilder/selector';
import { useDispatch, useSelector } from 'react-redux';
import { formBuilderActions } from '../../../features/formBuilder/slice';

export const FormCheckbox = ({
  label,
  disabled,
  isDisabled,
  elementId,
  formId,
}: FormElementProps) => {
  const handleDisabled = disabled ?? isDisabled;
  const dispatch = useDispatch();
  const value: unknown = useSelector(
    makeSelectElementValueByElementId(formId, elementId)
  );

  const handleChange = (event: boolean) => {
    dispatch(
      formBuilderActions.updateElementValue({ id: elementId, value: event })
    );
  };

  return (
    <Box flexDirection="column" gap="4px" alignItems="center">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      <Checkbox
        checked={value as boolean}
        disabled={handleDisabled}
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
};
