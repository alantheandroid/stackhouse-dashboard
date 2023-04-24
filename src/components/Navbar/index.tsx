import React from 'react';
import {
  AppBar,
  AppBarProps,
  Box,
  IconButton,
  Paper,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
  menuIcon?: boolean;
  title?: string;
} & Pick<AppBarProps, 'className'>;

function Navbar({ menuIcon = true, title, ...props }: Props) {
  return (
    <AppBar {...props}>
      <Toolbar>
        {menuIcon && (
          <IconButton>
            <MenuIcon />
          </IconButton>
        )}
        {title}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
