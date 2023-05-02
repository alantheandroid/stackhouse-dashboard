// this file contains the selector for the compound message feature

import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CompoundMsgType } from './model';

const selectCompoundMsg = (state: RootState) => state.compoundMsg;

export const selectCompoundMsgs = createSelector(
  selectCompoundMsg,
  (compoundMsg: CompoundMsgType[]) => compoundMsg
);

export const makeSelectCompoundMsgFromId = (id: string) =>
  createSelector(selectCompoundMsg, (compoundMsg: CompoundMsgType[]) =>
    compoundMsg.find((compoundMsg) => compoundMsg.formId === id)
  );
