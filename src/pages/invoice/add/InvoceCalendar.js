import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

function AddCalendar() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {

            width: '100%',
          },
        }}>
        <Paper elevation={3} >
          <Grid container spacing={2} columns={16} m={5}>

            <Grid container xl={6} md={6} xs={12} >
              <Typography gutterBottom variant="h1" component="div">
                Invoice
                <br />
                <Typography gutterBottom variant="h5" component="div">
                  Tambah Invoice
                </Typography>
              </Typography>

            </Grid>



            <Grid container xl={5} md={10} xs={12} spacing={2} >
              <Grid item xl={6} md={8} xs={12} >
                <Typography gutterBottom variant="h5" component="div">
                  Invoice
                </Typography>
              </Grid>

              <Grid item xl={6} md={8} xs={12} >
                <TextField id="filled-basic" variant="filled" />
              </Grid>
              <Grid item xl={6} md={8} xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                  Dari Tanggal  :
                </Typography>
              </Grid>
              <Grid item xl={6} md={8} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Grid>
              <Grid item xl={6} md={8} xs={12}>
                <Typography gutterBottom variant="h5" component="div">
                  Sampai Tanggal  :
                </Typography>
              </Grid>
              <Grid item xl={6} md={8} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker />
                </LocalizationProvider>
              </Grid>
            </Grid>




          </Grid>
        </Paper >
      </Box>

    </>
  )
}

export default AddCalendar
