import React from 'react';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {  StyledDataGrid } from './styled';

type Props = {
  rows: GridRowsProp;
  columns: GridColDef[];
  autoHeight?: boolean;
  checkboxSelection?: boolean;
  hidefooter?: boolean
};

export const DataGrid = ({
  rows,
  columns,
  autoHeight,
  checkboxSelection,
  hidefooter
}: Props) => {
  return (
    <div>
    <StyledDataGrid
        rows={rows}
        columns={columns}
        autoHeight={autoHeight}
        checkboxSelection={checkboxSelection}
        hideFooter={hidefooter}
        />
        </div>

  );
};
