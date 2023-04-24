import { Box, Container, Drawer, DrawerProps, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import React, { useState } from 'react';

type Props = {} & Pick<DrawerProps, 'className'>;

function Sidebar({ ...props }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <Drawer open={open} {...props} variant="persistent">
      <Container>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <IconButton onClick={() => setOpen(false)}>
            <ArrowBackIcon color="disabled" />
          </IconButton>
        </Box>
        This is a drawer
      </Container>
    </Drawer>
  );
}

export default Sidebar;
