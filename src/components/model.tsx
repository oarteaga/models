import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import ModelResume from './modelResume.tsx';
import ModelFieldList from './modelFieldList.tsx'
import ModelViewList from './modelViewList.tsx'


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

export default function Model( {tabs, center}) {
  const setActiveTabX = (newValue: number) => {    
    setValue(newValue);
  };

  const tabsX = [
    {
      label: "Resume",
      Component: <ModelResume setActiveTab={setActiveTabX}></ModelResume>
      //Component: <ModelResume setActiveTab={{}}></ModelResume>
    },
    {
      label: "Fields",
      Component: <ModelFieldList></ModelFieldList>
    },
    {
      label: "Views",
      Component: <ModelViewList></ModelViewList>    
    }
  ];  
  
  const [value, setValue] = React.useState(0);

  tabs = (tabs === undefined ? tabsX : tabs)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('Tab handleChange newVal='+newValue)
    setValue(newValue);
  };

  const setActiveTab = (newValue: number) => {
    console.log('setActiveTab called newVal='+newValue)
    setValue(newValue);
  };

  return (
    <Container maxWidth="md"  sx={{ p:2 }}>
      <Box sx={{ width: '100%', boxShadow: 3, borderRadius: 4, border:'3px solid gray' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} centered={center} onChange={handleChange} aria-label="basic tabs example">
            {tabs.map(({ label }, i) => (
              <Tab sx={{textTransform :"none", fontWeight:800}} label={label} key={i} />
            ))}          
          </Tabs>
        </Box>

        {tabs.map(( {Component} , i) => (
          <CustomTabPanel value={value} index={i} key={i}>
            { Component }
          </CustomTabPanel>
        ))}      
      </Box>
    </Container>
  );
}