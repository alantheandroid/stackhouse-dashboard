import React from 'react';
import { DataGrid } from '../../components/DataGrid';
import { columns, rows } from './mock';

function Home() {
  return <DataGrid rows={rows} columns={columns} checkboxSelection></DataGrid>;
}

export default Home;
