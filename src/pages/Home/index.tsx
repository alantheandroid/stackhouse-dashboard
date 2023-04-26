import React from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { Box, Button } from '@mui/material';

function Home() {
  return (
    <Box display="flex" flexDirection="column">
      <Navbar title="Dashboard" position="static" />
      <Button>Button</Button>
      <Sidebar>Questa è la sidebar</Sidebar>
    </Box>
  );
}

export default Home;
