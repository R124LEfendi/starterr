import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import AkunSatu from './Akun-1'
import AkunDua from './Akun-2'
import AkunTiga from './Akun-3'
import AkunEmpat from './Akun-4'
import AkunLima from './Akun-5'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


function DetailBank() {

  const simpan = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px',
  }

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };



  return (
    <Grid item md={6} xs={12}>
      <Card>

        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Detail bank
            </Typography>
            <Typography variant="body2">
              Informasi perusahaan akan ditampilkan dalam invoice
            </Typography>
          </CardContent>
        </CardActionArea>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Akun Bank 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AkunSatu />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Akun Bank 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AkunDua />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Akun Bank 3 </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AkunTiga />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>Akun Bank 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AkunEmpat />
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography>Akun Bank 5</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AkunLima />
          </AccordionDetails>
        </Accordion>





        <div className='simpan' style={simpan}>

          <Button ml="50px" variant="contained" color="success">
            Simpan &#x2713;
          </Button>
        </div>
        <br />


      </Card>
    </Grid>
  )
}

export default DetailBank
