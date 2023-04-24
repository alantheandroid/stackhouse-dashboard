import React, { useState } from 'react';
import { Home as HomeIcon } from '@mui/icons-material';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import Sidebar from '../../components/Sidebar';

function Home() {
  return (
    <>
      <Navbar title="Dashboard" />
      <Sidebar></Sidebar>
    </>
  );
}

export default Home;
