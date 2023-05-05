import React, { ReactNode, useState } from 'react';
import MuiSelect, {
  SelectChangeEvent,
  SelectProps,
} from '@mui/material/Select/Select';
import { InputLabel, MenuItem } from '@mui/material';
import { OptionsType } from '../FormFactory/formModel';
import FormControl from '@mui/material/FormControl/FormControl';

type Props = {
  options: OptionsType[];
  label: string;
  // onChange: (value: string | number | boolean) => void;
} & Pick<
  SelectProps,
  'className' | 'value' | 'fullWidth' | 'multiple' | 'onChange'
>;

function Select({ value, options, label, onChange, ...props }: Props) {
  return (
    <FormControl>
      {label ?? <InputLabel id={label}>{label}</InputLabel>}
      <MuiSelect
        labelId={label}
        value={value as string}
        onChange={(event: SelectChangeEvent) =>
          onChange(event.target.value as string)
        }
        {...props}
      >
        {options?.map(({ label, value }, index) => (
          <MenuItem key={label} value={value}>
            {label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
}

export default Select;
