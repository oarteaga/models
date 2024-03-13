import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ModelResume( {setActiveTab} ) {
  const handle_EditModelsFields = () => {
    setActiveTab(1)
  }
  return (
      <>
        <Box  component="form" sx={ {fontSize:'16px', display: 'flex-row', marginTop:5, alignItems: 'flex-end', '& > :not(style)': { m: 0, width: '100%' }}} 
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

        <Box  paddingTop={2} display="flex" justifyContent="flex-end" alignItems={'flex-end'} >          
          <Button onClick={handle_EditModelsFields} variant="contained">Edit Model fields</Button>
        </Box>
    </>

 );
}