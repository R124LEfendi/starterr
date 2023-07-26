import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InlineIcon } from '@iconify/react';

function Pengingat() {
  return (
    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Jatuh Tempo <span style={{ color: 'red' }}>*</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="Pada saat jatuh tempo" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="1 hari setelah jatuh tempo" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="3 hari setelah jatuh tempo" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="7 hari setelah jatuh tempo" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="14 hari setelah jatuh tempo" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="30 hari setelah jatuh tempo" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="60 hari setelah jatuh tempo" />
                </Grid>
                <Grid item xs={4}>
                  <FormControlLabel control={<Checkbox />} label="90 hari setelah jatuh tempo" />
                </Grid>
              </Grid>

              <Typography ml={3}>
                Disarankan untuk ceklist semua
              </Typography>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActions >
  )
}

export default Pengingat
