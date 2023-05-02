import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { FormBuilder } from './pages/FormBuilder';
import { useSelector } from 'react-redux';
import { RootState } from './features/store';
import { makeSelectCompoundMsgFromId } from './features/compoundMsg/selector';

function App(): JSX.Element {
  const value = useSelector(makeSelectCompoundMsgFromId('1'));
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form-builder" element={<FormBuilder valueFromState={value} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
