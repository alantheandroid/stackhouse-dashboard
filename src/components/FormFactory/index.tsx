import { FormType, FormElementType } from './formModel';
import React, { useState } from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { CompoundMsgType } from '../../features/compoundMsg/model';
import { elementGeneratorMap } from './elementMapper';

type FormFactoryProps = {
  form: FormType;
  onChange: (value?: string | number | boolean | undefined) => void;
  value: CompoundMsgType | undefined;
};

export const FormFactory = ({ form, onChange }: FormFactoryProps) => {
  const { elements } = form;

  return (
    <>
      {elements.map((element) => {
        const Component = elementGeneratorMap[element.type];
        if (Component !== undefined) {
          return (
            <FormElementContainer key={element.id} element={element}>
              <Component
                value={element.value}
                disabled={element.disabled}
                isDisabled={element.isDisabled}
                required={element.required}
                label={element.label}
                options={element.options}
                onChange={onChange}
              />
            </FormElementContainer>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
