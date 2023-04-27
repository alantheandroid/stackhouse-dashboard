import React from 'react';
import { Box, Container, Toolbar } from '@mui/material';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar title="Dashboard" position="fixed" />
      <Sidebar>Questa è la sidebar</Sidebar>
      <Box display="flex" flexDirection="column">
        <Toolbar />
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;
