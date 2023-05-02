import { Box } from '@mui/material'
import React from 'react'
import Text from '../../Text'
import { Checkbox } from '../../Checkbox'

type Props = {
    label: string
    value?: boolean
    disabled?: boolean
    isDisabled?: boolean
    required?: boolean
    destroyByChange?: boolean
    onChange: (value?: boolean) => void
  }

export const FormCheckbox = ({
  label,
  value,
  disabled,
  isDisabled,
  onChange
}: Props) => {

  const handleDisabled = disabled ?? isDisabled

  return (
    <Box flexDirection="column" gap="4px" alignItems="center">
      <Box justifyContent="flex-start">
        <Text>{label}</Text>
      </Box>
      <Checkbox checked={value} disabled={handleDisabled} onChange={onChange} />
    </Box>
  )
}
