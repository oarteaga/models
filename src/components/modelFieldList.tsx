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
import GenericFieldProps from './genericFieldProps.tsx'
import Container from '@mui/material/Container';
import { margin } from '@mui/system';
//import aFieldsModel from './ebavelDefinitions.ts';


export default function ModelFieldList() {
  const [addNew,   setAddNew] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handle_AddNewField = () => {
    setExpanded(false)    
    setAddNew(true)
  }

  const handle_SaveNewField = () => {
    setExpanded(false)    
    setAddNew(false)
  }

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  if(addNew)
  {
    return (
      <>
        <Box paddingBottom={2} sx={{ gap: 1 }} display="flex" justifyContent="flex-end" alignItems={'flex-end'} >          
          <Button onClick={handle_SaveNewField} sx={{ marginRight: 0 }} variant="contained" startIcon={<AddCircleOutlineIcon/>}>Save</Button>
          <Button onClick={handle_SaveNewField} sx={{ marginRight: 3 }} variant="contained" startIcon={<AddCircleOutlineIcon/>}>Cancel</Button>
        </Box>      
        <Container maxWidth="md"  sx={{ p:1 }}>
          <Box sx={{ width: '100%', boxShadow: 3, borderRadius: 4, border:'3px solid gray' }}>
            <Container sx={{py:3}}>
              <GenericFieldProps></GenericFieldProps>
            </Container>    
          </Box>
        </Container>
      </>
    )
  }
  else
  {
    return (
      <>
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


        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
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



        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
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
      </>
    )
  }
}