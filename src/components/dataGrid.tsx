import * as React from 'react';
import { useMemo, useState, useEffect } from 'react';
//import { useDemoData } from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
//import { makeStyles, withStyles } from "@material-ui/core/styles";

const columns: GridColDef[] = [
  { 
    field: 'model',
    headerName: 'Nombre',
    width: 300,
    editable: false,
    headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 600,
    editable: false,
    headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'string',
    width: 110,
    editable: false,
    headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
  }
];

const VISIBLE_FIELDS = ['model', 'description', 'type'];

const rows = [
  { id:1, model:'Modelo 1', description: 'Modelo uno', type: 'Artus' },
  { id:2, model:'Modelo 2', description: 'Modelo dos', type: 'eBavel' },
  { id:3, model:'Modelo 3', description: 'Modelo tres', type: 'eBavel' },
  { id:4, model:'AAAA', description: 'Modelo AAA', type: 'eBavel' },
  { id:5, model:'BBBB', description: 'Modelo BBB', type: 'eBavel' },
];

/*
const filterModel: GridFilterModel = {
  items: [
    { id: 1, field: 'model', operator: 'is', value: '4' },
    { id: 2, field: 'description', operator: 'is', value: 'true' },
  ],
  logicOperator: GridLogicOperator.Or,
};
*/


export default function DataGridDemo() {
  //const [filter, setFilter] = useState('');
  const [filter, setFilter] = useState([]);
  /*
  const { data } = useDemoData({
    dataSet: rows,
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });
  */
  const { data } = {}

  //console.log('filter:'+filter)
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        /*
        filterModel={{
          items: filter,
          quickFilterValues: [],
        }}        //onFilterModelChange={setFilter('B')}        
        //onFilterModelChange={(newFilterModel) => setFilter(newFilterModel)}
        */
        rows={rows}
        columns={columns}
        sx={{
          '.MuiDataGrid-columnSeparator': {
            display: 'none',
          },
          '&.MuiDataGrid-root': {
            border: 'none',
          },
        }}        
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          filter: {
            filterModel: {
              items: [],
              quickFilterValues: [''],
            },
          },
        }}
        pageSizeOptions={[10]}
        density = 'compact' //standard comfortable
        //checkboxSelection
        disableRowSelectionOnClick
        disableColumnMenu = {true}        
        disableColumnFilter
        disableColumnSelector
        disableColumnExport
        disableDensitySelector        
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },            
            showQuickFilter: true,
          },       
        }} 
      />
    </Box>
  );
}
