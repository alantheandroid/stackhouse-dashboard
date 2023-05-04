export type FormElementType = {
  type: 'input' | 'select' | 'checkbox' | 'radio' | 'textarea';
  inputType?: 'text' | 'number' | 'date';
  id: string;
  options?: OptionsType[];
  label: string;
  value?: string | boolean
  disabled?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  name?: string;
};

export type FormType = {
  elements: FormElementType[];
  formId: string;
};

export type OptionsType = {
  value: string
  label: string;
};
