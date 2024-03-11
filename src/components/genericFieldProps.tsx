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

const handleChange_FielType = () => {
  alert('Combo change')
}
export default function GenericFieldProps() {
    return (
        <Box sx={{ width: '100%' }} >
          <Stack spacing={4} direction="row" >
            <TextField helperText="Label" id="txtLabel" label="Label" />
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={30}
                label="Type"
                onChange={handleChange_FielType}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>Type</FormHelperText>
            </FormControl>            
            <TextField helperText="Requiered" id="txtRequiered" label="Required"/>
          </Stack>
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