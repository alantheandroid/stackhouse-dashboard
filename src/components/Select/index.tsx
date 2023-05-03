import React, { useState } from 'react';
import Autocomplete, {
  AutocompleteProps,
} from '@mui/material/Autocomplete/Autocomplete';
import { TextField } from '@mui/material';

type Props = {} & Pick<
  AutocompleteProps<any, false, false, false>,
  'className' | 'value' | 'onChange' | 'getOptionLabel' | 'options'
>;

function Select({ options, value, onChange, getOptionLabel, ...props }: Props) {
  const [selectValue, setSelectValue] = useState<string | null>(null);

  return (
    <Autocomplete
      options={options}
      // getOptionLabel={(option) => option.label}
      value={selectValue}
      onChange={(event: any, newValue: string | null) =>
        setSelectValue(newValue)
      }
      renderInput={(params) => <TextField {...params} />}
      {...props}
    />
  );
}

export default Select;
