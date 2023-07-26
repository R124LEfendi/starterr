import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




function JenisUang() {

  const options = ['IDR - Indonesia', 'USD - United States', 'AUD - Australia', 'EUR - Euro', 'GBP - United Kingdom', 'SGD - Singapore', 'MYR - Malaysia', 'INR - India', 'CNY - China', 'JPY - Japan', 'KRW - Korea'];


  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Mata uang <span style={{ color: 'red' }}>*</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>

              <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Pilih" />}
              />
              <Typography ml={3}>
                Default format mata uang menggunakan 2 (dua) digit di belakang koma.
              </Typography>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActions >
  );
};

export default JenisUang
