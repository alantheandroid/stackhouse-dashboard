import React from 'react';
import { GridRowsProp, DataGrid as MuiDataGrid } from '@mui/x-data-grid';
import {  GridColDef  } from '@mui/x-data-grid';

type Props = {
    rows: GridRowsProp
    columns: GridColDef[]
    autoHeight?: boolean
}

export const DataGrid = ({rows, columns, autoHeight}:Props) => {
   return <MuiDataGrid rows={rows} columns={columns} autoHeight={autoHeight}></MuiDataGrid>
}