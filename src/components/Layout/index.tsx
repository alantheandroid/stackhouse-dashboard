import React from 'react';
import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { StyledLayout } from './styled';

function Layout() {
  return (
    <>
    <StyledLayout>

      <Sidebar />
      <>
      <Header />
      </>
    </StyledLayout>
    </>
  );
}

export default Layout;
