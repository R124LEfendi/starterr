import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import JenisUang from './JenisUang'
import Button from '@mui/material/Button';

function Currency() {

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
            <Typography gutterBottom variant="h5" color="black" component="div">
              Mata uang
            </Typography>
          </CardContent>
        </CardActionArea>

        <JenisUang />

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

export default Currency
