import React from 'react'
import { Box, IconButton } from "@mui/material"
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import AppsIcon from '@mui/icons-material/Apps';
import TuneIcon from '@mui/icons-material/Tune';


export const NavMenu = () => {
  return ( 
        <Box>
            <IconButton>
                <TuneIcon color='action'/>
            </IconButton>
            <IconButton>
                <LightModeIcon color='action'/>
            </IconButton>
            <IconButton>
                <LanguageIcon color='action'/>
            </IconButton>
            <IconButton>
                <NotificationsIcon color='action'/>
            </IconButton>
            <IconButton>
                <AppsIcon color='action'/>
            </IconButton>
            
        </Box>
  )
}
