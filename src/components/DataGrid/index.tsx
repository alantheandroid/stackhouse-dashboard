import React from 'react';
import { GridRowsProp, DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import {  GridColDef  } from '@mui/x-data-grid';

type Props = {
    rows: GridRowsProp
    columns: GridColDef[]
    autoHeight?: boolean
    checkboxSelection?: boolean
}

export const DataGrid = ({rows, columns, autoHeight, checkboxSelection}:Props) => {
   return <MuiDataGrid rows={rows} columns={columns} autoHeight={autoHeight} checkboxSelection={checkboxSelection}></MuiDataGrid>
}