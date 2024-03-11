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
        <Box  component="form" sx={ {fontSize:'16px', display: 'flex-row', marginTop:5, alignItems: 'flex-end', '& > :not(style)': { m: 1, width: '65ch' }}} 
          noValidate
          autoComplete="off"
        >
          <TextField id="modelName" label="Nombre del Modelo" helperText="Use this to give your model a friendly name." variant="outlined" />
        </Box>         
        
        <Box  component="form" sx={ {display: 'flex-row', marginTop:5, alignItems: 'flex-end', '& > :not(style)': { m: 1, width: '65ch' }}} 
          noValidate
          autoComplete="off"
        >          
          <TextField id="modelDescription" label="Descripcion del Modelo" helperText="Use this to add a short description to tell people whats this model is for." variant="outlined" />
        </Box>         

        <Box padding={1} display="flex" justifyContent="flex-end" alignItems={'flex-end'} >          
          {/* Falta ver como pasar los parametros dentro del MAP*/}
          <Button onClick={handle_EditModelsFields} variant="contained">Edit Model fields</Button>
        </Box>
    </>

 );
}