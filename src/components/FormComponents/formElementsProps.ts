import { OptionsType } from '../FormFactory/formModel';

export type FormElementProps = {
  formId: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  isDisabled?: boolean;
  inputType?: string;
  elementId: string;
  options?: OptionsType[];
  onChange: (elementId: string, value: unknown) => void;
};
