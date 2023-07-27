import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Autocomplete from '@mui/material/Autocomplete';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function InvoiceTo() {
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
          <Grid container spacing={2} columns={16} m={5}>

            <Grid container xl={8} md={10} xs={12} spacing={2} >

              <Grid item xl={8} md={8} xs={12} >
                <Typography gutterBottom variant="h5" component="div">
                  Invoice Kepada :
                </Typography>
              </Grid>
              <Grid item xl={8} md={8} xs={12} >

                <TextField id="filled-basic" label="Costumer" variant="filled" />
              </Grid>

            </Grid>

            <Grid container xl={4} md={6} xs={12} >

              <table>
                <thead>
                  <Typography gutterBottom variant="h5" component="div">
                    Bill To  :
                  </Typography>
                </thead>
                <tr>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      Nomor
                    </Typography>
                  </td>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      :  123456789
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      Nama
                    </Typography>
                  </td>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      : Jhon Doe
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      Pembayaran
                    </Typography>
                  </td>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      : 27/4/2023
                    </Typography>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      Jatuh Tempo
                    </Typography>
                  </td>
                  <td>
                    <Typography gutterBottom variant="h5" component="div" m="0">
                      : 30/4/2023
                    </Typography>
                  </td>
                </tr>
              </table>
            </Grid>

          </Grid>
        </Paper>
      </Box>
    </>


  )
}

export default InvoiceTo
