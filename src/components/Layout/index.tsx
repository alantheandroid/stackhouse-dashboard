import React from 'react';
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
