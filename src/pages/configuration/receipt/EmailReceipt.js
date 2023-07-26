import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';


function EmailReceipt() {

  const defaultValue = "Hi @pelanggan,\n\nKami mengucapkan terima kasih karena telah mempercayakan @perusahaan. Terlampir adalah Tanda Terima dengan nomor @nomor tanggal @tanggalbayar.\n\nSalam\n@perusahaan";

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
                  label="Pengingat"
                  multiline
                  rows={4}
                  defaultValue={defaultValue}
                />
                <Typography ml={3}>
                  Template by default. Kamu bisa mengubah template email invoice
                </Typography>
                <Typography ml={3}>
                  Variabel : <button disabled>@pelanggan</button> <button disabled>@tanggal bayar</button> <button disabled>@metode pembayaran</button> <button disabled>@total</button> <button disabled>@link</button> <button disabled>@perusahaan</button> <button disabled>@tersisa</button> <button disabled>@nomor</button>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default EmailReceipt
