import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
//import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
//import IconButton from '@mui/material/IconButton';
//import OutlinedInput from '@mui/material/OutlinedInput';
//import InputLabel from '@mui/material/InputLabel';
//import InputAdornment from '@mui/material/InputAdornment';
//import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import ModelResume from './modelResume.tsx';
import ModelFieldList from './modelFieldList.tsx'
import ModelViewList from './modelViewList.tsx'
import { ModelList } from './modelList.tsx';

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
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function ModelResumeFieldsViews( {setShowModelListView, tabs, center} ) {
  const handle_AddNewField = () => {
    alert('add new field')
  }
  const setActiveTabX = (newValue: number) => {    
    setActiveTab(newValue);
  };

  const tabsX = [
    {
      label: "Resume",
      Component: <ModelResume setShowModelListView={setShowModelListView} setActiveTab={setActiveTabX}></ModelResume>
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
  //mantener la Tab activa
  const [activeTab, setActiveTab] = React.useState(0);
  //Tabs definition
  tabs = (tabs === undefined || tabs === null ? tabsX : tabs)
  //Controlar el cambio de Tabs del componente
  const handleChangeTabs = (event: React.SyntheticEvent, newActiveTab: number) => {
    setActiveTab(newActiveTab);
  };
  //Func para activar un tab desde un child
  //const activeThisTab = (newActiveTab: number) => {
  //  setActiveTab(newActiveTab);
  //};

  return (
    <Container maxWidth="md"  sx={{ p:2 }}>
      <Box sx={{ width: '100%', boxShadow: 3, borderRadius: 4, border:'3px solid gray' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={activeTab} centered={center} onChange={handleChangeTabs} aria-label="basic tabs example">
            {tabs.map(({ label }, i) => (
              <Tab sx={{textTransform:"none", fontWeight:800}} label={label} key={i} />
            ))}          
          </Tabs>
        </Box>
        {/* Generar los Tabs con sus respectivos componentes dentro de ellas */ }
        {tabs.map(( {Component} , i) => (                    
          <CustomTabPanel value={activeTab} index={i} key={i}>           
            { Component }
          </CustomTabPanel>
        ))}      
      </Box>
    </Container>
  );
}

export function Models()
{
  const [showModelListView, setShowModelListView] = React.useState(true);
  const setModelListViewFunc = (newValue: boolean) => {    
    console.log('Models setShowModelListView', newValue)
    setShowModelListView(newValue);
  };

  if(showModelListView)
  {
    console.log('showModelListView==TRUE por lo cual se pinta resumen de modelos')
    return (
      <Container maxWidth="md"  sx={{ p:2, marginTop:10 }}>
        <ModelList setShowModelListView={setShowModelListView} ></ModelList>
      </Container>
    )
  }
  else
  {
    console.log('showModelListView==FALSE por lo cual se pinta EDICION FIELDS')
    return (
      <Container maxWidth="md"  sx={{ p:2, marginTop:10 }}>
        <ModelResumeFieldsViews setShowModelListView={setShowModelListView} tabs={null} center={true}></ModelResumeFieldsViews>
      </Container>
    )
  }
}
