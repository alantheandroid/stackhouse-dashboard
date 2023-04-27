import React from 'react';
import { AppBar, AppBarProps, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch } from 'react-redux';
import { appActions } from '../../features/app/slice';

type Props = {
  menuIcon?: boolean;
  title?: string;
} & Pick<AppBarProps, 'className' | 'variant' | 'position'>;

function Navbar({ menuIcon = true, title, ...props }: Props) {
  const dispatch = useDispatch();
  return (
    <AppBar {...props} elevation={6}>
      <Toolbar>
        {menuIcon && (
          <IconButton onClick={() => dispatch(appActions.toggleSidebar())}>
            <MenuIcon />
          </IconButton>
        )}
        {title}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
