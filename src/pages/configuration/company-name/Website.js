import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

function Website() {
  return (
    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Website
          </Typography>
        </Grid>
        <Grid item xs={12} sm container style={{ padding: "0", height: "5", margin: "0" }}>
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
                <TextField label="Website" fullWidth id="fullWidth" />

              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </CardActions>
  )
}

export default Website
