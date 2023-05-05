import { FormType, FormElementType } from './formModel';
import React, { useState } from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { CompoundMsgType } from '../../features/compoundMsg/model';
import { elementGeneratorMap } from './elementMapper';

type FormFactoryProps = {
  form: FormType | undefined;
  value: CompoundMsgType | undefined;
};

export const FormFactory = ({ form }: FormFactoryProps) => {
  return (
    <>
      {form?.elements.map((element) => {
        const Component = elementGeneratorMap[element.type];
        if (Component !== undefined) {
          return (
            <FormElementContainer key={element.id} element={element}>
              <Component
                disabled={element.disabled}
                isDisabled={element.isDisabled}
                required={element.required}
                label={element.label}
                options={element.options}
                inputType={element.inputType}
                elementId={element.id}
                name={element.name}
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
