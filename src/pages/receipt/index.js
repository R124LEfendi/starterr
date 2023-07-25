import React from 'react';
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import FormatR from './Format-r';
import EmailReceipt from './EmailReceipt';


function Receipt() {

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
              Pengaturan Receipt
            </Typography>
            <Typography variant="body2" color="black">
              Kostumisasi Receipt
            </Typography>
          </CardContent>
        </CardActionArea>

        <FormatR />

        <EmailReceipt />



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

export default Receipt

