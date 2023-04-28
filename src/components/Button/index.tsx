import React, { ReactNode } from 'react'
import { Button as BaseButton } from '@mui/material'

type ButtonVariants = 'text' | 'contained' | 'outlined'

type Props = {
    variant?: ButtonVariants
    title: string
    startIcon?: ReactNode
    endIcon?: ReactNode
    size?: 'small' | 'medium' | 'large'
    disabled?: boolean
    isLoading?: boolean
    onClick: () => void
}

export const Buttons = ({variant='contained', title, startIcon, endIcon, size='small', disabled, onClick}:Props) => {
  return (
    <BaseButton 
    variant={variant} 
    startIcon={startIcon} 
    endIcon={endIcon} 
    size={size}
    disabled={disabled} 
    onClick={onClick}
    >
        {title}
    </BaseButton>
  )
}
