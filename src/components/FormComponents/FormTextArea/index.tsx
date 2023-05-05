import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Text from '../../Text';
import { OptionsType } from '../../FormFactory/formModel';
import { FormElementProps } from '../formElementsProps';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectElementValueByElementId } from '../../../features/formBuilder/selector';
import Quill from 'quill';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export const FormTextArea = ({
  label,
  disabled,
  isDisabled,
  elementId,
  formId,
  onChange,
}: FormElementProps) => {
  const value: unknown = useSelector(
    makeSelectElementValueByElementId(formId, elementId)
  );

  const handleDisabled = disabled ?? isDisabled;

  const quillOptions = {
    modules: {
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ align: [] }],
        ['link'], // it's also possible to also add an image and a video
        ['clean'],
      ],
    },
    theme: 'snow',
  };

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
