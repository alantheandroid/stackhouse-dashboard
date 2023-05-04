import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { FormBuilder } from './pages/FormBuilder';
import Input from './components/Input';
import Select from './components/Select';
import Checkbox from './components/Checkbox';
import Switch from './components/Switch';
import { FormGroup } from '@mui/material';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form-builder" element={<FormBuilder />} />
            <Route
              path="form-components-test"
              element={
                <FormGroup>
                  <Input label="Input" />
                  <Select options={['Test']} />
                  <Checkbox label="Checkbox" />
                  <Switch label="Switch" />
                </FormGroup>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
