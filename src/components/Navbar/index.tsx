import React from 'react'
import { DashBoardNavbar } from './styled'
import { IconButton } from '@mui/material'
import { GridSearchIcon } from '@mui/x-data-grid'
import { NavMenu } from './NavMenu'

export const Navbar = () => {
  return (

    <DashBoardNavbar>
      <IconButton aria-label="search">
            <GridSearchIcon color='disabled'/>
        </IconButton>
        <NavMenu />
    </DashBoardNavbar>
  )
}
