export type FormElementType = {
  type:
    | 'input-text'
    | 'input-number'
    | 'input-date'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'textarea';
  options?: OptionsType[];
  title?: string;
};

export type FormType = {
  elements: FormElementType[];
};

export type OptionsType = {
  value: string;
  label: string;
};
