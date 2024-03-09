import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ControlledAccordions from './modelAccordion.tsx';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tab-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tab-${index}`,
  };
}

const tabsX = [
  {
    label: "Resume",
    Component:         
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
          <Button variant="contained">Edit fields</Button>
        </Box>
      </>
  },
  {
    label: "Fields",
    Component: <ControlledAccordions></ControlledAccordions>
  },
  {
    label: "Views",
    Component: (
      <div>
        <h1>Vistas</h1>
      </div>
    )
  }
];

//export default function BasicTabs( {tabs = tabsX, center : boolean}) {
export default function BasicTabs( {tabs, center}) {
  const [value, setValue] = React.useState(0);
debugger  
  tabs = (tabs === undefined ? tabsX : tabs)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Container maxWidth="md"  sx={{ p:2 }}>
      <Box sx={{ width: '100%', boxShadow: 3, borderRadius: 4, border:'3px solid gray' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} centered={center} onChange={handleChange} aria-label="basic tabs example">
            {/*
            <Tab sx={{textTransform :"none"}} label="Resume" {...a11yProps(0)} />
            <Tab sx={{textTransform :"none"}} label="Fields" {...a11yProps(1)} />
            <Tab sx={{textTransform :"none"}} label="Views" {...a11yProps(2)}  />
            */}
            {tabs.map(({ label }, i) => (
              <Tab sx={{textTransform :"none", fontWeight:800}} label={label} key={i} />
            ))}          
          </Tabs>
        </Box>
        {tabs.map(({ Component }, i) => (
          <CustomTabPanel value={value} index={i} key={i}>
            {Component}
          </CustomTabPanel>
        ))}      
        {/*
        <CustomTabPanel value={value} index={0}>
          <Box  component="form" sx={ {display: 'flex-row', alignItems: 'flex-end', '& > :not(style)': { m: 1, width: '55ch' }}} 
            noValidate
            autoComplete="off"
          >
            <TextField id="modelName" label="Nombre del Modelo" variant="standard" />
            <TextField id="modelDescription" label="Descripcion del Modelo" variant="standard" />
          </Box>                
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="input-with-sx" label="With sx" variant="standard" />
          </Box>                       
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField id="standard-basic" label="Descripcion del Modelo" variant="standard" />
          </Box>                
        </CustomTabPanel>
        */}
      </Box>
    </Container>
  );
}