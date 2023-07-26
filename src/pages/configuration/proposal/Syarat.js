import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

function Syarat() {
  return (
    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Syarat dan Ketentuan
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '60' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  fullWidth
                  id="outlined-multiline-static"

                  multiline
                  rows={4}

                />
                <Typography ml={3}>
                  Kosongkan apabila tidak ingin ditampilan di lampiran PDF proposal
                </Typography>
                <Typography ml={3}>
                  Variabel : <button color="succes" disabled>@tanggal</button> <button disabled>@perusahaan</button> <button disabled>@pelanggan</button> <button disabled>@nomor</button> <button disabled>@total</button> <button disabled>@masa berlaku</button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default Syarat
