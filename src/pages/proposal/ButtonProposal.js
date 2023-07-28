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

        <div style={buttonInvoice}>
          <Button href='/proposal/edit-proposal' variant="contained" color="primary" >Tambah</Button>
        </div>

      </Box>
    </>

  )
}

export default ButtonInvoice
