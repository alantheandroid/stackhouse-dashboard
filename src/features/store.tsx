import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { appReducer } from './app/slice';
import { formBuilderReducer } from './formBuilder/slice';
import { compoundMsgReducer } from './compoundMsg/slice';

const rootReducer = {
  app: appReducer,
  formBuilder: formBuilderReducer,
  compoundMsg: compoundMsgReducer
};

function* rootSaga() {
  yield all([]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
