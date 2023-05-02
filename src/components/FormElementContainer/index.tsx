// this is a container component for form elements
// it is a wrapper for the form elements
// and it must be used to wrap the form elements in the form factory
// like this: <FormElementContainer><input /></FormElementContainer>

import React from 'react';

type FormElementContainerProps = {
  children: React.ReactNode;
  type: string;
};

export const FormElementContainer = ({
  children,
  type,
}: FormElementContainerProps) => {
  return <div>{children}</div>;
};
