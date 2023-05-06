import { FormType, FormElementType } from './formModel';
import React, { useState } from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { CompoundMsgType } from '../../features/compoundMsg/model';
import { elementGeneratorMap } from './elementMapper';
import { formBuilderActions } from '../../features/formBuilder/slice';
import { useDispatch } from 'react-redux';

type FormFactoryProps = {
  form: FormType | undefined;
  value: CompoundMsgType | undefined;
};

export const FormFactory = ({ form }: FormFactoryProps) => {
  const dispatch = useDispatch();
  const onChange = (elementId: string, value: unknown) => {
    dispatch(formBuilderActions.updateElementValue({ id: elementId, value, formId: form?.formId }));
  };
  return (
    <>
      {form?.elements.map((element) => {
        const Component = elementGeneratorMap[element.type];
        if (Component !== undefined) {
          return (
            <FormElementContainer key={element.id} element={element}>
              <Component
                formId={form.formId}
                disabled={element.disabled}
                isDisabled={element.isDisabled}
                required={element.required}
                label={element.label}
                options={element.options}
                inputType={element.inputType}
                elementId={element.id}
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
