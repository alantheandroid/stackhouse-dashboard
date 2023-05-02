import React from 'react';
import { FormElementType } from './formModel';

type ElementGeneratorMap = {
  [key in FormElementType['type']]: (
    element: FormElementType,
    onChange: (id: string, value: string | number | boolean) => void
  ) => JSX.Element;
};

export const elementGeneratorMap: ElementGeneratorMap = {
  'input-text': (element, onChange) => (
    <input
      key={element.id}
      onChange={(e) => onChange(element.id, e.target.value)}
      placeholder={element.placeholder}
      type="text"
    />
  ),
  'input-number': (element, onChange) => (
    <input
      onChange={(e) => onChange(element.id, e.target.value)}
      key={element.id}
      type="number"
    />
  ),
  'input-date': (element, onChange) => (
    <input
      onChange={(e) => onChange(element.id, e.target.value)}
      key={element.id}
      type="date"
    />
  ),
  textarea: (element, onChange) => (
    <textarea
      onChange={(e) => onChange(element.id, e.target.value)}
      key={element.id}
    />
  ),
  select: (element, onChange) => (
    <>
      <p>{element.title}</p>
      <select onChange={(e) => onChange(element.id, e.target.value)}>
        {element.options?.map((item) => {
          return (
            <option key={item.value + element.id} value={item.value}>
              {item.value}
            </option>
          );
        })}
      </select>
    </>
  ),
  checkbox: (element, onChange) => (
    <>
      <p>{element.title}</p>
      {element.options?.map((item) => {
        return (
          <React.Fragment key={item.value + element.id}>
            <input
              type="checkbox"
              name={item.label}
              id={item.label}
              value={item.value}
              onChange={(e) => onChange(element.id, e.target.value)}
            />
            <label htmlFor={item.label}>{item.value}</label>
          </React.Fragment>
        );
      })}
    </>
  ),
  radio: (element, onChange) => (
    <>
      {element.options?.map((item) => {
        return (
          <React.Fragment key={item.value + element.id}>
            <input
              type="radio"
              name={element.id}
              id={item.label}
              value={item.value}
              checked={false} // fix this
              onChange={(e) => onChange(element.id, e.target.value)}
            />
            <label htmlFor={item.label}>{item.value}</label>
          </React.Fragment>
        );
      })}
    </>
  ),
};
