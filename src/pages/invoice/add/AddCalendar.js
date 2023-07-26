import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Item from '@mui/material/ListItem';

function AddCalendar() {
  return (
    <Card fullwidth>
      <CardActionArea>

        <CardContent>

          <Grid container spacing={2} columns={16}>

            <Grid item xs={8}>
              <Typography gutterBottom variant="h1" component="div">
                Invoice
              </Typography>
            </Grid>

            <Grid item xs={8}>

              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="h3" component="div">
                    Invoice
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="h5" component="div">
                    zjxcbkjbkbk
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom variant="h5" component="div">
                    zjxcbkjbkbk
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                </Grid>
              </Grid>


            </Grid>

          </Grid>

        </CardContent>
      </CardActionArea>

    </Card>
  )
}

export default AddCalendar
