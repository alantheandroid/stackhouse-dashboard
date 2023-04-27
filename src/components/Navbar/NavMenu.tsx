import React from 'react'
import { Box, IconButton } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import AppsIcon from '@mui/icons-material/Apps';
import SortIcon from '@mui/icons-material/Sort';

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
        </Box>
  )
}
