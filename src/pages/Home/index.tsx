import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { DataGrid } from '../../components/DataGrid';
import { columns, rows } from './mock';



function Home() {
  return (
    <>
      <Sidebar></Sidebar>
      <>
      <Navbar title="Dashboard" />
      <DataGrid rows={rows} columns={columns} checkboxSelection></DataGrid>
      </>
    </>
  );
}

export default Home;
