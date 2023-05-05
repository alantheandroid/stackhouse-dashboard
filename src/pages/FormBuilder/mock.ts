// this is a mock of a prototype of a form
// this form has a formId, title, and elements

import { FormType } from '../../components/FormFactory/formModel';
import { generateId } from '../../utils/formIdGenerator';

export const mockForm: FormType = {
  formId: generateId(),
  elements: [
    {
      type: 'input',
      id: generateId(),
      label: 'First Name',
      value: 'John',
      required: true,
      inputType: 'text',
    },
    {
      type: 'input',
      id: generateId(),
      label: 'Last Name',
      value: 'Doe',
      required: true,
      inputType: 'text',
    },
    {
      type: 'input',
      id: generateId(),
      label: 'Age',
      value: '30',
      required: true,
      inputType: 'number',
    },
    {
      type: 'input',
      id: generateId(),
      label: 'Date of Birth',
      value: '1990-01-01',
      required: true,
      inputType: 'date',
    },
    {
      type: 'select',
      id: generateId(),
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ],
      label: 'Select',
      value: '1',
      required: true,
    },
    {
      type: 'checkbox',
      id: generateId(),
      label: 'Checkbox',
      value: false,
      required: true,
    },
    {
      type: 'radio',
      id: generateId(),
      label: 'Radio',
      required: true,
      options: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ],
      value: '1',
    },
    {
      type: 'textarea',
      id: generateId(),
      label: 'Textarea',
      value: 'This is a textarea',
      required: true,
    },
  ],
};
