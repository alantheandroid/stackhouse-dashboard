import React from 'react';
import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { StyledDataGrid } from './styled';

type Props = {
  rows: GridRowsProp;
  columns: GridColDef[];
  autoHeight?: boolean;
  checkboxSelection?: boolean;
};

export const DataGrid = ({
  rows,
  columns,
  autoHeight,
  checkboxSelection,
}: Props) => {
  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      autoHeight={autoHeight}
      checkboxSelection={checkboxSelection}
    ></StyledDataGrid>
  );
};
