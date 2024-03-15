import * as React from 'react';
import { useMemo, useState, useEffect } from 'react';
//import { useDemoData } from '@mui/x-data-grid-generator';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { styled } from '@mui/material/styles';
import {
  DataGrid, 
  GridColDef, 
  GridToolbarContainer,
  GridToolbarQuickFilter} from '@mui/x-data-grid';

   import Paper from '@mui/material/Paper';
  import Grid from '@mui/material/Grid';
  
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));  
//import { makeStyles, withStyles } from "@material-ui/core/styles";

const columns: GridColDef[] = [
  { 
    field: 'model',
    headerName: 'Nombre',
    width: 270,
    editable: false,
    headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 390,
    editable: false,
    headerAlign: 'center',
    headerClassName: 'super-app-theme--header',
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'string',
    width: 85,
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
function CustomToolbar( {setShowModelListView} ) {
  function handle_ButtonToolbar()
  {
    //setShowModelListView(true)
    console.log('CustomToolbar btn click');
   }
  
  return (
    <GridToolbarContainer sx={{marginBottom:1}}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <GridToolbarQuickFilter/>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={handle_ButtonToolbar} variant="contained" startIcon={<AddCircleOutlineIcon/>}>New model</Button>
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
}

export default function DataGridDemo( {setShowModelListView} ) {
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
  const handleOnRowDoubleClick = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details, // GridCallbackDetails
  ) => {
    setShowModelListView(false)    
  };  
  

  //console.log('filter:'+filter)
  return (
    <Box sx={{ marginTop:2, height: 500, width: '100%' }}>
      <DataGrid
        /*
        filterModel={{
          items: filter,
          quickFilterValues: [],
        }}        //onFilterModelChange={setFilter('B')}        
        //onFilterModelChange={(newFilterModel) => setFilter(newFilterModel)}
        */
        onRowDoubleClick={handleOnRowDoubleClick}
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
        slots={{ toolbar: CustomToolbar }}        
        slotProps={{
          toolbar: {
            quickFilterProps: {
              variant: "outlined",
              size: "small"
            }            
            //printOptions: { disableToolbarButton: true },
            //csvOptions: { disableToolbarButton: true },            
            //showQuickFilter: true,
          },                 
        }} 
        
      />
    </Box>
  );
}
