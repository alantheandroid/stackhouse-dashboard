import React from 'react'
import { Box } from '@mui/material'
import Text from '../../Text'
import { Input } from '../../Input'
import { OptionsType } from '../../FormFactory/formModel'


type Props = {
  label: string
  value?: string
  disabled?: boolean
  required?: boolean
  isDisabled?: boolean
  inputType?: string
  options?: OptionsType[]
  onChange: (value: string) => void
}

export const FormInput = ({
  label,
  value,
  disabled,
  isDisabled,
  inputType,
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
        inputType={inputType}
        value={value}
        placeholder={label}
        disabled={handleDisabled}
        onChange={handleChange}
      />
    </Box>
  )
}
