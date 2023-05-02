import { FormType } from '../../utils/formModel';
import React from 'react';

type FormFactoryProps = {
  form: FormType;
};

export const FormFactory = ({ form }: FormFactoryProps) => {
  const { elements } = form;

  return (
    <>
      {elements.map((element, index) => {
        switch (element.type) {
          case 'input-text':
            return <input key={index} type="text" />;
          case 'input-number':
            return <input key={index} type="number" />;
          case 'input-date':
            return <input key={index} type="date" />;
          case 'textarea':
            return <textarea key={index} />;
          case 'select':
            return (
              <select key={index}>
                {element.options?.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.value}
                    </option>
                  );
                })}
              </select>
            );
          case 'checkbox':
            return (
              <div key={index}>
                <p>{element.title}</p>
                {element.options?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <input
                        type="checkbox"
                        name={item.label}
                        id={item.label}
                        value={item.value}
                      />
                      <label htmlFor={item.label}>{item.value}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            );
          case 'radio':
            return (
              <div key={index}>
                {element.options?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <input type="radio" id={item.label} value={item.value} />
                      <label htmlFor={item.label}>{item.value}</label>
                    </React.Fragment>
                  );
                })}
              </div>
            );
          default:
            return null; // o gestione dell'errore
        }
      })}
    </>
  );
};
