import React from "react";
//import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Unstable_Grid2';

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
            <Grid xs={6}>
              <TextField sx={{width:'100%'}} helperText="Label" id="txtLabel" label="Label" />
            </Grid>
            <Grid xs={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fieldType}
                  label="Type"
                  onChange={handleChange_FielType}
                >
                  <MenuItem value={'10'}>Ten</MenuItem>
                  <MenuItem value={'20'}>Twenty</MenuItem>
                  <MenuItem value={'30'}>Thirty</MenuItem>
                </Select>
              </FormControl>              
            </Grid>
            <Grid  display="flex" alignItems="center" justifyContent="right" sx={{mt:-3}} xs={3}>
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
  

  /*
            <FormControl variant="standard">
               <InputLabel htmlFor="label-prefix-adornment">
                  Label
               </InputLabel>
               <Input id="prefix-adornment" placeholder="Label"/>
            </FormControl>

            <FormControl variant="standard">
               <InputLabel htmlFor="label-prefix-adornment">
                  Type
               </InputLabel>
               <Input id="prefix-adornment" placeholder="Type"/>
            </FormControl>

            <FormControl variant="standard">
               <InputLabel htmlFor="label-prefix-adornment">
                  Required
               </InputLabel>
               <Input id="prefix-adornment" placeholder="Required"/>
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="label-prefix-adornment">
                Help text
              </InputLabel>
              <Input id="prefix-adornment" placeholder="Help text"/>
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="label-prefix-adornment">
                Default value
              </InputLabel>
              <Input id="prefix-adornment" placeholder="Default value"/>
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="label-prefix-adornment">
                Read only if
              </InputLabel>
              <Input id="prefix-adornment" placeholder="Read only if"/>
            </FormControl>

            <FormControl variant="standard">
              <InputLabel htmlFor="label-prefix-adornment">
                Visibility condition
              </InputLabel>
              <Input id="prefix-adornment" placeholder="Visibility condition"/>
            </FormControl>
        </>

  */