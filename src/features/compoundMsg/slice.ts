// this is the slice file for the compound message feature

import { createSlice } from '@reduxjs/toolkit';
import { CompoundMsgType } from './model';

const initialState: CompoundMsgType[] = [];

const compoundMsgSlice = createSlice({
    name: 'compoundMsg',
    initialState,
    reducers: {
        addCompoundMsg: (state, action) => {
            state.push(action.payload);
        },
        removeCompoundMsg: (state, action) => {
            const index = state.findIndex(
                (compoundMsg) => compoundMsg.formId === action.payload.formId
            );
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
    },
});

export const compoundMsgActions = compoundMsgSlice.actions;
export const compoundMsgReducer = compoundMsgSlice.reducer;