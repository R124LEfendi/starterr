import React from 'react'
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';

function SaveInvoice() {

  const buttonSave = {
    margin: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            height: '15vh',
            width: '100%',
          },
        }}>
        <Paper elevation={3} sx={{ justifyContent: "center", alignItems: "center" }} >
          <div style={buttonSave}>
            <Button variant="contained" >Kirim</Button>
          </div>
          <div style={buttonSave} >
            <Button variant="contained" color='success' width="100">Simpan</Button>
          </div>
        </Paper >
      </Box>
    </>
  )
}

export default SaveInvoice
