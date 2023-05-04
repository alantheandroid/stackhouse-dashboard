import React from 'react';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel/FormControlLabel';

type Props = { label?: string } & Pick<CheckboxProps, 'checked'>;

function Checkbox({ label, ...props }: Props) {
  return label != null ? (
    <FormControlLabel control={<MuiCheckbox {...props} />} label={label} />
  ) : (
    <MuiCheckbox {...props} />
  );
}

export default Checkbox;
