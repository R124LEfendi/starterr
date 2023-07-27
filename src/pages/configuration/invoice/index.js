import React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import Format from './format';
import Template from './Template';
import Jatuh from './Jatuh';
import Pengingat from './Pengingat';
import TemplatePengingat from './TemplatePengingat';
import Button from '@mui/material/Button';


function Invoice() {

  const simpan = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px',
  }

  return (
    <Grid item md={6} xs={12}>
      <Card>

        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Pengaturan invoice
            </Typography>
            <Typography variant="body2">
              Kostumisasi invoice
            </Typography>
          </CardContent>
        </CardActionArea>


        <Format />



        <Template />



        <Jatuh />



        <Pengingat />


        <TemplatePengingat />

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

export default Invoice

