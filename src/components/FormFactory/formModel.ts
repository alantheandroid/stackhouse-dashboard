export type FormElementType = {
  type:
    | 'input-text'
    | 'input-number'
    | 'input-date'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'textarea';
  id: string;
  options?: OptionsType[];
  title?: string;
};

export type FormType = {
  elements: FormElementType[];
  formId: string;
};

export type OptionsType = {
  value: string;
  label: string;
};
