import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { FormBuilder } from './pages/FormBuilder';
import { useSelector } from 'react-redux';
import { makeSelectCompoundMsgById } from './features/compoundMsg/selector';
import { CompoundMsgType } from './features/compoundMsg/model';

function App(): JSX.Element {
  const value: CompoundMsgType | undefined = useSelector(
    makeSelectCompoundMsgById('1')
  );
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="form-builder"
              element={<FormBuilder valueFromState={value} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
