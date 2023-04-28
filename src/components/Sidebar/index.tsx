import React from 'react'
import { StyledSidebar, StyledSidebarHeader } from './styled'
import { IconButton } from '@mui/material'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectSidebarState } from '../../features/app/selectors';
import { appActions } from '../../features/app/slice';
import Text from '../Text';

type Props = {
  isOpen?: boolean
}

export const Sidebar = ({isOpen}:Props) => {
  const dispatch = useDispatch()
  const siderStatus = useSelector(selectSidebarState)
  return (
    <StyledSidebar isOpen={isOpen ?? !siderStatus}>
      <StyledSidebarHeader>
       <Text variant='h5'>LOGO</Text>
      <IconButton onClick={() => {dispatch(appActions.toggleSidebar())}}>
        <FirstPageIcon color='disabled'/>
      </IconButton>
      </StyledSidebarHeader>
    </StyledSidebar>
  )
}
