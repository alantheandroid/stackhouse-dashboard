import {
  Container,
  Divider,
  Drawer,
  DrawerProps,
  IconButton,
  List,
  Toolbar,
  // Theme,
  // useMediaQuery,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarState } from '../../features/app/selectors';
import { appActions } from '../../features/app/slice';

type Props = {
  children?: ReactNode;
} & Pick<DrawerProps, 'className'>;

function Sidebar({ children, ...props }: Props) {
  // const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const open = useSelector(selectSidebarState);
  const dispatch = useDispatch();

  return (
    <Drawer open={open} {...props} variant="persistent">
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={() => dispatch(appActions.toggleSidebar())}
          size="small"
        >
          <ArrowBackIcon color="disabled" />
        </IconButton>
      </Toolbar>
      <Divider />
      <Container>
        <List>{children}</List>
      </Container>
    </Drawer>
  );
}

export default Sidebar;
