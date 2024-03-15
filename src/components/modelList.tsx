import React from 'react'
import DataGridDemo from './dataGrid.tsx'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export function ModelList( {setShowModelListView} ) {
  return (
      <Container>
        <Box sx={{ width: 800, boxShadow: 3, borderRadius: 4, border:'3px solid gray' }}>
          <Container sx={{py:3}}>
            <Typography variant="span">Modelos</Typography>
            <Divider sx={{mb:3, mt:0}} orientation="horizontal" flexItem />
            <DataGridDemo setShowModelListView={setShowModelListView}></DataGridDemo>
          </Container>
        </Box>
      </Container>
  )
}