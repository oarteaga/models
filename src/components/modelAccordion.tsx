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


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const collapseAll = () => {
    setExpanded(false);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '75%', align:'left', flexShrink: 0 }}>
            Fecha de Inicio del Proyecto
          </Typography>
          <Typography sx={{ width: '25%', align:'right', color: 'text.secondary' }}>
            Date
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <BasicTabs center={false} tabs={tabsX}></BasicTabs>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '75%', align:'left', flexShrink: 0 }}>
            Nombre del Proyecto 
          </Typography>
          <Typography sx={{ width: '25%', align:'right', color: 'text.secondary' }}>
            Multiple choice horizontal
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BasicTabs></BasicTabs>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}