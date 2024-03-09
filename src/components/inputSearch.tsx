import React from "react";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function InputSearch() {
    return (
        <div style={{
            padding: 20,
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            gap: 0
         }}>
           <FormControl variant="standard">
            {
            /*
               <InputLabel htmlFor="label-prefix-adornment">
                  Search
               </InputLabel>
            */           }    
               <Input
                  id="prefix-adornment"
                  placeholder="Search"
                  endAdornment={
                     <InputAdornment position="end">
                        <Search color="info" />
                     </InputAdornment>
                  }
               />
            </FormControl>
         </div>
    )
  }
  

