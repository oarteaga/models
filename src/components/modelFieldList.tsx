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
import ModelFieldEdit from './modelFieldEdit.tsx'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


interface eBavelField {  
}
const aFieldsModel = [
]


export default function ModelFieldList() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handle_AddNewField = () => {
    setExpanded(false)    
  }

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Box paddingBottom={2} display="flex" justifyContent="flex-end" alignItems={'flex-end'} >          
        <Button onClick={handle_AddNewField} variant="contained" startIcon={<AddCircleOutlineIcon/>}>Add new field</Button>
      </Box>

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
          <ModelFieldEdit></ModelFieldEdit>
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
          <ModelFieldEdit></ModelFieldEdit>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}