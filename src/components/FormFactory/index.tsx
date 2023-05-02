import { FormType } from './formModel';
import React, { useState } from 'react';
import { FormElementContainer } from '../FormElementContainer';

type FormFactoryProps = {
  form: FormType;
};

export const FormFactory = ({ form }: FormFactoryProps) => {
  const { elements } = form;
  const [selectedRadio, setSelectedRadio] = useState<string | undefined>(
    undefined
  );

  return (
    <>
      {elements.map((element) => {
        switch (element.type) {
          case 'input-text':
            return (
              <FormElementContainer key={element.id} element={element}>
                <input placeholder={element.placeholder} type="text" />
              </FormElementContainer>
            );
          case 'input-number':
            return (
              <FormElementContainer key={element.id} element={element}>
                <input type="number" />
              </FormElementContainer>
            );
          case 'input-date':
            return (
              <FormElementContainer key={element.id} element={element}>
                <input type="date" />
              </FormElementContainer>
            );
          case 'textarea':
            return (
              <FormElementContainer key={element.id} element={element}>
                <textarea />
              </FormElementContainer>
            );
          case 'select':
            return (
              <FormElementContainer key={element.id} element={element}>
                <p>{element.title}</p>
                <select>
                  {element.options?.map((item) => {
                    return (
                      <option key={item.value + element.id} value={item.value}>
                        {item.value}
                      </option>
                    );
                  })}
                </select>
              </FormElementContainer>
            );
          case 'checkbox':
            return (
              <FormElementContainer key={element.id} element={element}>
                <p>{element.title}</p>
                {element.options?.map((item) => {
                  return (
                    <React.Fragment key={item.value + element.id}>
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
              <FormElementContainer key={element.id} element={element}>
                {element.options?.map((item) => {
                  return (
                    <React.Fragment key={item.value + element.id}>
                      <input
                        type="radio"
                        name={element.id}
                        id={item.label}
                        value={item.value}
                        checked={selectedRadio === item.value}
                        onChange={() => setSelectedRadio(item.value)}
                      />
                      <label htmlFor={item.label}>{item.value}</label>
                    </React.Fragment>
                  );
                })}
              </FormElementContainer>
            );
          default:
            return null;
        }
      })}
    </>
  );
};
