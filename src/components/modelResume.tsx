import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type showTypeView = 'modelList' | 'editFieldList'

export default function ModelResume( {setShowModelListView, setActiveTab} ) {
  function editModelFields()  {
      setActiveTab(1)    
  }
  function showModelList()  {
    setShowModelListView(true)    
  }
  return (
      <>
        <Box  component="form" sx={ {fontSize:'16px', display: 'flex-row', marginTop:2, alignItems: 'flex-end', '& > :not(style)': { m: 0, width: '100%' }}} 
          noValidate
          autoComplete="off"
        >
          <TextField id="modelName" label="Nombre del Modelo" helperText="Use this to give your model a friendly name." variant="outlined" />
        </Box>         
        
        <Box  component="form" sx={ {display: 'flex-row', marginTop:2, alignItems: 'flex-end', '& > :not(style)': { m: 0, width: '100%' }}} 
          noValidate
          autoComplete="off"
        >          
          <TextField id="modelDescription" label="Descripcion del Modelo" helperText="Use this to add a short description to tell people whats this model is for." variant="outlined" />
        </Box>         

        <Box  paddingTop={4} display="flex" justifyContent="space-between" >          
          <Button onClick={showModelList} variant="contained">Show Model List</Button>
          <Button onClick={editModelFields} variant="contained">Edit Model fields</Button>
        </Box>

    </>

 );
}