import React from 'react';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { StyledContainer, StyledLayout } from './styled';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <StyledLayout>
      <Sidebar />
      <StyledContainer>
      <Header />
      <Outlet />
      </StyledContainer>
    </StyledLayout>
  );
}

export default Layout;
