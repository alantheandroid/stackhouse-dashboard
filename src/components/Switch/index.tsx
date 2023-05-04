import React from 'react';
import MuiSwitch, { SwitchProps } from '@mui/material/Switch/Switch';
import { FormControlLabel } from '@mui/material';

type Props = { label?: string } & SwitchProps;

function Switch({ label, ...props }: Props) {
  return label != null ? (
    <FormControlLabel control={<MuiSwitch {...props} />} label={label} />
  ) : (
    <MuiSwitch {...props} />
  );
}

export default Switch;
