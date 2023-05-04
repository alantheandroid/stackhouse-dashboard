// this componenet render the Radio Button from the Material UI library

import React from 'react';
import { Radio as MuiRadio, RadioProps } from '@mui/material';

type Props = {
    checked?: boolean;
    disabled?: boolean;
    name?: string;
    onChange?: (value: boolean) => void;
    radioProps?: RadioProps;
};

export const Radio = (props: Props) => {
    const { checked, disabled, onChange, radioProps, name } = props;
    return (
        <MuiRadio
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={({ target }) => onChange?.(target.checked)}
            {...radioProps}
        />
    );
};