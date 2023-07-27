import React from 'react'
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

function Tempo() {

  const paperStyle = {
    padding: '10px',


  }

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
        <Paper elevation={3} sx={paperStyle} >
          <Typography variant="h4" component="div" >Jatuh Tempo :
          </Typography>
          <Typography variant="h5" component="div" >IDR 0
          </Typography>
          <Typography variant="h4" component="div" >Jatuh Tempo dalam 30 hari :
          </Typography>
          <Typography variant="h5" component="div" >IDR 0
          </Typography>
          <Typography variant="h4" component="div" >Rata-rata waktu pembayaran :
          </Typography>
          <Typography variant="h5" component="div" >0 Hari
          </Typography>

        </Paper >
      </Box>
    </>
  )
}

export default Tempo
