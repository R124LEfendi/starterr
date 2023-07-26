import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';


function Format() {
  return (

    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Format Nomor <span style={{ color: 'red' }}>*</span>
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
                <TextField fullWidth label="Harus diisi" Required id="fullWidth" defaultValue="Invoice/@tahun/@bulan/@hari" />
                <Typography ml={3}>
                  Variabel : <button disabled color="purple">@tahun</button> <button disabled color="purple">@bulan</button> <button disabled color="purple">@hari</button>
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </CardActions>
  );
}

export default Format
