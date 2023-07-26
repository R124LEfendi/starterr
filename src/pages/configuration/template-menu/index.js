import React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import FileChoose from './file-choose';
import Tampilan from './tampilan.js';
import ColorChoose from './color-choose';
import BankTemplate from './Bank-template';



function Template() {

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
              Template
            </Typography>
            <Typography variant="body2">
              Template dan tema perusahaan
            </Typography>
          </CardContent>
        </CardActionArea>

        <FileChoose />

        <Tampilan />

        <ColorChoose />

        <BankTemplate />





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

export default Template

