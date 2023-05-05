import React, { useState } from 'react';
import MuiAutocomplete, {
  AutocompleteProps,
} from '@mui/material/Autocomplete/Autocomplete';
import { TextField } from '@mui/material';

type Props = {} & Pick<
  AutocompleteProps<any, false, false, false>,
  | 'className'
  | 'value'
  | 'onChange'
  | 'getOptionLabel'
  | 'options'
  | 'fullWidth'
  | 'multiple'
>;

function Autocomplete({
  options,
  value,
  onChange,
  getOptionLabel,
  ...props
}: Props) {
  const [selectValue, setSelectValue] = useState<string | null>(null);

  return (
    <MuiAutocomplete
      options={options}
      value={selectValue}
      onChange={(event: any, newValue: string | null) =>
        setSelectValue(newValue)
      }
      renderInput={(params) => <TextField {...params} />}
      {...props}
    />
  );
}

export default Autocomplete;
