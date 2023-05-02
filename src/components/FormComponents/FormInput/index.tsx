import React from 'react'
import { Box } from '@mui/material'
import Text from '../../Text'
import { Input } from '../../Input'


type Props = {
  label: string
  value?: string
  disabled?: boolean
  required?: boolean
  isDisabled?: boolean
  onChange: (value?: string) => void
}

export const FormInput = ({
  label,
  value,
  disabled,
  isDisabled,
  onChange,
}: Props) => {
  
  const handleChange = (value: string) => {
    onChange(value)
  }
  const handleDisabled = disabled ?? isDisabled
  return (
    <Box flexDirection="column" gap="4px">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      <Input
        value={value}
        placeholder={label}
        disabled={handleDisabled}
        onChange={handleChange}
      />
    </Box>
  )
}
