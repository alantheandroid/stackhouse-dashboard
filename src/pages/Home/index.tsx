import React from 'react';
import { DataGrid } from '../../components/DataGrid';
import { columns, rows } from './mock';
import { Searchbar } from '../../components/Searchbar';
import Select from '../../components/Select';
import Input from '../../components/Input';

function Home() {
  return (
    <>
      <Searchbar placeholder="Find ticket" onChange={() => {}} />
      <DataGrid rows={rows} columns={columns} checkboxSelection hidefooter />
    </>
  );
}

export default Home;
