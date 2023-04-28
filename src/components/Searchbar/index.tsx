import React from 'react'
import { StyledSearchbar } from './styled'
import { GridSearchIcon } from '@mui/x-data-grid'

type Props = {
    autoComplete?:string
    autoFocus?: boolean
    disabled?: boolean
    onChange: () => void
    placeholder?: string
    required?: boolean
}

export const Searchbar = ({autoComplete, autoFocus, disabled, onChange, placeholder, required}:Props) => {
  return (
    <StyledSearchbar 
    autoComplete={autoComplete}
    autoFocus={autoFocus}
    disabled={disabled}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    
    startAdornment={
        <GridSearchIcon color='disabled'
          sx={{
            fontSize: 16,
            marginRight: 1,
            color: "text.disabled",
        }}
        />
    }
    />
  )
}
