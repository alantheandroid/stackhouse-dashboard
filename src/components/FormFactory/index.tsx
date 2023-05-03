import { FormType, FormElementType } from './formModel';
import React, { useState } from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { CompoundMsgType } from '../../features/compoundMsg/model';
import { elementGeneratorMap } from './elementMapper';

type FormFactoryProps = {
  form: FormType;
  onChange: (value?: string | number | boolean | undefined) => void;
  value: CompoundMsgType | undefined;

  /**
   * I get this error when I try to change the value of the element
   * inside of the frontend:
   * Cannot read properties of undefined (reading 'value')
TypeError: Cannot read properties of undefined (reading 'value')
    at onChangeElement (http://localhost:3000/static/js/bundle.js:2852:23)
    at handleChange (http://localhost:3000/main.30a3e56ff51c5e719bc8.hot-update.js:33:5)
    at onChange (http://localhost:3000/main.30a3e56ff51c5e719bc8.hot-update.js:46:22)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:80303:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:80347:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:80404:35)
    at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/static/js/bundle.js:80418:29)
    at executeDispatch (http://localhost:3000/static/js/bundle.js:84562:7)
    at processDispatchQueueItemsInOrder (http://localhost:3000/static/js/bundle.js:84588:11)
    at processDispatchQueue (http://localhost:3000/static/js/bundle.js:84599:9)
    so this is how I should fix this component:
    
   */
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
