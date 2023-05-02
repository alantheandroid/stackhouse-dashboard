import React from 'react';
import { DataGrid } from '../../components/DataGrid';
import { columns, rows } from './mock';
import { Searchbar } from '../../components/Searchbar';
import { FormCheckbox } from '../../components/FormComponents/FormCheckbox';
import { FormInput } from '../../components/FormComponents/FormInput';


function Home() {
  return (
  <>
    <Searchbar placeholder='Find ticket' onChange={() => {}}/>
    <DataGrid rows={rows} columns={columns} checkboxSelection hidefooter/>
    <FormCheckbox label='prova' onChange={() => {}}/>
    <FormInput label='inpit' onChange={() => {}} />
  </>  
  );
}

export default Home;
