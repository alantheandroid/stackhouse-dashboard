// this is a container component for form elements
// it is a wrapper for the form elements
// and it must be used to wrap the form elements in the form factory
// like this: <FormElementContainer><input /></FormElementContainer>

import React from 'react';
import { FormElementType } from '../../utils/formModel';

type FormElementContainerProps = {
  children: React.ReactNode;
  element: FormElementType;
};

export const FormElementContainer = ({
  children,
  element,
}: FormElementContainerProps) => {
  return <div>{children}</div>;
};
