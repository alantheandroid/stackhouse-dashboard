import { FormType } from '../../utils/formModel';
import React from 'react';
import { FormElementContainer } from '../FormElementContainer';

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
            return (
              <FormElementContainer type={element.type}>
                <input key={index} type="text" />
              </FormElementContainer>
            );
          case 'input-number':
            return (
              <FormElementContainer type={element.type}>
                <input key={index} type="number" />
              </FormElementContainer>
            );
          case 'input-date':
            return (
              <FormElementContainer type={element.type}>
                <input key={index} type="date" />
              </FormElementContainer>
            );
          case 'textarea':
            return <textarea key={index} />;
          case 'select':
            return (
              <FormElementContainer type={element.type}>
                <select key={index}>
                  {element.options?.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.value}
                      </option>
                    );
                  })}
                </select>
              </FormElementContainer>
            );
          case 'checkbox':
            return (
              <FormElementContainer type={element.type}>
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
              </FormElementContainer>
            );
          case 'radio':
            return (
              <FormElementContainer type={element.type}>
                {element.options?.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <input type="radio" id={item.label} value={item.value} />
                      <label htmlFor={item.label}>{item.value}</label>
                    </React.Fragment>
                  );
                })}
              </FormElementContainer>
            );
          default:
            return null; // o gestione dell'errore
        }
      })}
    </>
  );
};
