import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import { CardActionArea } from '@mui/material';



function Tampilan() {


  return (

    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Tampilan Proposal & invoice <span style={{ color: 'red' }}>*</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="400px"
                    image="/images/pages/invoice.png"
                    alt="green iguana"
                  />
                  <CardContent>


                    <FormControlLabel value="Standar" control={<Radio />} label="Standar" />


                  </CardContent>
                </CardActionArea>
              </Card>


            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </CardActions>
  );

};


export default Tampilan
