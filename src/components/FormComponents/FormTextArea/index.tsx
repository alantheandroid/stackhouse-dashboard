import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Text from '../../Text';
import { FormElementProps } from '../formElementsProps';
import { useSelector } from 'react-redux';
import { makeSelectElementValueByElementId } from '../../../features/formBuilder/selector';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { quillOptions } from './quillOptions';

export const FormTextArea = ({
  label,
  elementId,
  formId,
  onChange,
}: FormElementProps) => {
  const value: unknown = useSelector(
    makeSelectElementValueByElementId(formId, elementId)
  );

  return (
    <Box flexDirection="column" gap="4px">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      <ReactQuill
        theme="snow"
        value={value as string}
        onChange={(e) => onChange(elementId, e)}
        modules={quillOptions.modules}
      />
    </Box>
  );
};
