import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { Box, Button } from '@mui/material';
import { DataGrid } from '../../components/DataGrid';
import { columns, rows } from './mock';

function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <Navbar title="Dashboard" position="static" />
      <Button>Button</Button>
      <DataGrid rows={rows} columns={columns} checkboxSelection></DataGrid>
      <Sidebar>Questa è la sidebar</Sidebar>
    </Box>
  );
}

export default Home;
