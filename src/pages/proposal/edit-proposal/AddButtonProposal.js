import React from 'react'
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

function ButtonInvoice() {

  const buttonInvoice = {
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '50px',
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
        <Paper elevation={3} >
          <div style={buttonInvoice}>
            <Button href='./Crud' variant="contained" color="primary" >Tambah</Button>
          </div>
        </Paper >
      </Box>
    </>

  )
}

export default ButtonInvoice
