import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function TemplatePengingat() {

  const defaultValue = "Hi @pelanggan,\n\nTerlampir adalah Invoice yang telah jatuh tempo. Kami mengharapkan agar segera dibayarkan secepatnya.\n\nNilai outstanding invoice kamu adalah sebesar @tersisa\n\nSalam";

  return (
    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Template Email <span style={{ color: 'red' }}>*</span>
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
                  label="Multiline"
                  multiline
                  rows={4}
                  defaultValue={defaultValue}
                />
                <Typography ml={3}>
                  Template by default. Kamu bisa mengubah template email invoice
                </Typography>
                <Typography ml={3}>
                  Variabel : <button disabled>@tanggal</button> <button disabled>@perusahaan</button> <button disabled>@pelanggan</button> <button disabled>@nomor</button> <button disabled>@total</button> <button disabled>@tersisa</button> <button disabled>@jatuh tempo</button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActions>




  )
}

export default TemplatePengingat
