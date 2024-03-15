import React from "react";
//import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
//import FormControl from '@mui/material/FormControl';
//import InputLabel from '@mui/material/InputLabel';
//import FormHelperText from '@mui/material/FormHelperText';
//import MenuItem from '@mui/material/MenuItem';
//import FormGroup from '@mui/material/FormGroup';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';
import Autocomplete from '@mui/material/Autocomplete';
import {eBavelField, eBavelFieldsTypes} from './ebavelDefinitions.ts'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GenericFieldProps() {
  const [fieldType, setFieldType] = React.useState('');

  const handleChange_FielType = (event: SelectChangeEvent) => {
    setFieldType(event.target.value as string);
  };
    
  return (
      <Box sx={{ width: '100%' }} >
        <Grid container spacing={2}>
          <Grid xs={5}>
            <TextField sx={{width:'100%'}} helperText="Label" id="txtLabel" label="Label" />
          </Grid>
          <Grid xs={5} >
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={eBavelFieldsTypes}
              sx={{ width: '90%' }}
              getOptionLabel={(option: eBavelField) =>
                `${option.description}`
              }              
              renderInput={(params) => <TextField {...params} label="Type" />}
            />              
          </Grid>
          <Grid  display="flex" alignItems="center" justifyContent="right" sx={{mt:-3}} xs={2}>
            <FormControlLabel control={<Switch defaultChecked />} label="Required" />
          </Grid>
        </Grid>

        <Stack spacing={2} sx={{border:0, marginTop:2}} direction="column" >
          <TextField helperText="Help text" id="txtHelp" label="Help text"/>
          <TextField helperText="Default value" id="txtDefault" label="Default value" />
          <TextField helperText="Read only if" id="txtReadOnlyIf" label="Read only if"/>
          <TextField helperText="Visibility condition" id="txtVisibilityCondition" label="Visibility condition"/>
        </Stack>        
      </Box>
  )
}
