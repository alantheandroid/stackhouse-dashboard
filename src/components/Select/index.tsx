import React, { useState } from 'react';
import Autocomplete, {
  AutocompleteProps,
} from '@mui/material/Autocomplete/Autocomplete';
import { OptionsType } from '../FormFactory/formModel';
import {
  TextField,
  getAutocompleteUtilityClass,
  useAutocomplete,
} from '@mui/material';

type Props = {} & Pick<
  AutocompleteProps<T, false, false, false>,
  | 'className'
  | 'value'
  | 'onChange'
  | 'renderInput'
  | 'getOptionLabel'
  | 'options'
>;

function Select<T>({
  options,
  value,
  onChange,
  renderInput,
  getOptionLabel,
  ...props
}: Props) {
  const [selectValue, setSelectValue] = useState<string | null>('');

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
