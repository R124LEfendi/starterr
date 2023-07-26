import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';


function BankTemplate() {

  const defaultValue = "Mohon dilakukan pembayaran ke rekening:\n\n@namabank1\n@cabangbank1\n@norekening1\n@namarekening1\n==========================================\n@namabank2\n@cabangbank2\n@norekening2\n@namarekening2\n=========================================\n@namabank3\n@cabangbank3\n@norekening3\n@namarekening3\n=========================================\n@namabank4\n@cabangbank4\n@norekening4\n@namarekening4\n=========================================\n@namabank5\n@cabangbank\n@norekening5\n@namarekening5";

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
                  '& .MuiTextField-root': { m: 1, width: '60', height: 'auto' },
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
                  size="medium"
                />

                <Typography ml={3}>
                  Template by default. Kamu bisa mengubah template email invoice
                </Typography>
                <Typography ml={3}>
                  Variabel : <button disabled>@namabank1</button> <button disabled>@cabangbank1</button> <button disabled>@norekening1</button> <button disabled>@namarekening1</button> <button disabled>@namabank2</button> <button disabled>@cabangbank2</button> <button disabled>@norekening2</button> <button disabled>@namarekening2</button> <button disabled> @namabank3</button> <button disabled>@cabangbank3</button> <button disabled>@norekening3</button> <button disabled>@namarekening3</button>
                  <button disabled> @namabank4</button> <button disabled>@cabangbank4</button> <button disabled>@norekening4</button> <button disabled>4namarekening4</button>
                  <button disabled> @namabank5</button> <button disabled>@cabangbank5</button> <button disabled>@norekening5</button> <button disabled>@namarekening5</button>
                </Typography>


              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActions>




  )
}

export default BankTemplate
