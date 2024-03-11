import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import Grid from '@mui/material/Grid';
import BasicTabs from './modelCard.tsx'
import GenericFieldProps from './genericFieldProps.tsx'


interface eBavelField {  
}
const aFieldsModel = [
]

const tabsX = [
  {
    label: "Properties",
    Component: <GenericFieldProps></GenericFieldProps>
  },
  {
    label: "Advanced",
    Component: <div>Advanced Properties</div>
  },
];


export default function ModelFieldEdit() {

  return (
      <BasicTabs center={false} tabs={tabsX}></BasicTabs>
  );
}