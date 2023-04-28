import React from 'react'
import { Box, Button, IconButton } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import AppsIcon from '@mui/icons-material/Apps';
import SortIcon from '@mui/icons-material/Sort';
import Text from '../Text';
import { Avatar } from '../Avatar';


export const NavMenu = () => {
  return ( 
        <Box>
            <IconButton>
                <SortIcon color='disabled'/>
            </IconButton>
            <IconButton>
                <LightModeIcon color='disabled'/>
            </IconButton>
            <IconButton>
                <LanguageIcon color='disabled'/>
            </IconButton>
            <IconButton>
                <NotificationsIcon color='disabled'/>
            </IconButton>
            <IconButton>
                <AppsIcon color='disabled'/>
            </IconButton>
            <Button variant='outlined' size='small' sx={{border: '1px solid lightgrey', borderRadius: '20px'}}>
                <Box display={'flex'} gap={1}><Text variant='body1'>Ciao, Nome Cognome</Text><Avatar /></Box>
            </Button>
        </Box>
  )
}
