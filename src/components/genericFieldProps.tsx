import React from "react";
import { FormControl, Input, InputAdornment, InputLabel } from "@mui/material";
import { Mail, PasswordOutlined, Search } from "@mui/icons-material";

export default function GenericFieldProps() {
    return (
        <>
            <FormControl variant="standard">
               <InputLabel htmlFor="label-prefix-adornment">
                  Enter your email
               </InputLabel>
               <Input
                  id="prefix-adornment"
                  placeholder="Enter your email"
                  endAdornment={
                     <InputAdornment position="end">
                        <Mail color="info" />
                     </InputAdornment>
                  }
               />
            </FormControl>

           <FormControl variant="standard">
               <InputLabel htmlFor="label-prefix-adornment">
                  Search
               </InputLabel>

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

            <FormControl variant="standard">
               <InputLabel htmlFor="label-prefix-adornment">
                  Enter your password
               </InputLabel>
               <Input
                  id="prefix-adornment"
                  placeholder="Enter your password"
                  endAdornment={
                     <InputAdornment position="end">
                        <PasswordOutlined color="info" />
                     </InputAdornment>
                  }
               />
            </FormControl>
        </>
    )
  }
  

