import { FormType, FormElementType } from './formModel';
import React, { useState } from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { CompoundMsgType } from '../../features/compoundMsg/model';
import { elementGeneratorMap } from './elementMapper';

type FormFactoryProps = {
  form: FormType;
  onChange: (id: string, value: string | number | boolean | undefined) => void;
  value: CompoundMsgType | undefined;
};

export const FormFactory = ({ form, onChange }: FormFactoryProps) => {
  const { elements } = form;

  return (
    <>
      {elements.map((element) => {
        const generator = elementGeneratorMap[element.type];
        if (generator !== undefined) {
          return (
            <FormElementContainer key={element.id} element={element}>
              {generator(element, onChange)}
            </FormElementContainer>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};
