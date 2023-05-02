import React from 'react';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { FormBuilder } from './pages/FormBuilder';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="form-builder" element={<FormBuilder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
