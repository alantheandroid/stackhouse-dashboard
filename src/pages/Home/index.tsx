import React from 'react';
import { DataGrid } from '../../components/DataGrid';
import { columns, rows } from './mock';
import { Searchbar } from '../../components/Searchbar';
import { FormCheckbox } from '../../components/FormComponents/FormCheckbox';
import { FormInput } from '../../components/FormComponents/FormInput';
import { FormInputNumber } from '../../components/FormComponents/FormInputNumber';

function Home() {
  return (
  <>
    <Searchbar placeholder='Find ticket' onChange={() => {}}/>
    <DataGrid rows={rows} columns={columns} checkboxSelection hidefooter/>
    <FormCheckbox label='prova' onChange={() => {}}/>
    <FormInput label='inpit' onChange={() => {}} />
    <FormInputNumber label='number' onChange={() => {}} />
  </>  
  );
}

export default Home;
