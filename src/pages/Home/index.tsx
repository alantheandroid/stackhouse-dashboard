import React from 'react';
import { DataGrid } from '../../components/DataGrid';
import { columns, rows } from './mock';
import { Searchbar } from '../../components/Searchbar';

function Home() {
  return (
  <>
    <Searchbar placeholder='Find ticket' onChange={() => {}}/>
    <DataGrid rows={rows} columns={columns} checkboxSelection hidefooter/>
  </>  
  );
}

export default Home;
