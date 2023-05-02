// this is a mock of a prototype of a form
// this form has a formId, title, and elements

import { FormType } from '../../components/FormFactory/formModel';
import { generateId } from '../../utils/formIdGenerator';

export const mockForm: FormType = {
  elements: [
    {
      type: 'input-text',
      id: generateId(),
      title: 'First Name',
      placeholder: 'Enter your first name',
    },
    {
      type: 'input-text',
      id: generateId(),
      title: 'Last Name',
      placeholder: 'Enter your last name',
    },
    {
      type: 'select',
      id: generateId(),
      title: 'Country',
      options: [
        {
          value: 'usa',
          label: 'USA',
        },
        {
          value: 'canada',
          label: 'Canada',
        },
        {
          value: 'uk',
          label: 'UK',
        },
      ],
    },
    {
      type: 'checkbox',
      id: generateId(),
      title: 'Choose your favorite fruits',
      options: [
        {
          value: 'apple',
          label: 'Apple',
        },
        {
          value: 'banana',
          label: 'Banana',
        },
        {
          value: 'kiwi',
          label: 'Kiwi',
        },
        {
          value: 'orange',
          label: 'Orange',
        },
        {
          value: 'pear',
          label: 'Pear',
        },
      ],
    },
    {
      type: 'radio',
      id: generateId(),
      title: 'Preferred language',
      options: [
        {
          value: 'english',
          label: 'English',
        },
        {
          value: 'spanish',
          label: 'Spanish',
        },
        {
          value: 'french',
          label: 'French',
        },
      ],
    },
  ],
  formId: generateId(),
};
