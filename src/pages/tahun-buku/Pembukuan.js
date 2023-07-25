import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




function Pembukuan() {

  const options = ['Jan-Des', 'Feb-Jan', 'Mar-Feb', 'Apr-Mar', 'Mei-Apr', 'Jun-Mei', 'Jul-Jun', 'Agu-Jul', 'Sep-Agu', 'Okt-Sep', 'Nov-Okt', 'Des-Nov'];


  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  return (
    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Tahun Buku <span style={{ color: 'red' }}>*</span>
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
                Tahun buku yang paling banyak digunakan adalah periode Januari - Desember.
              </Typography>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardActions >
  );
};

export default Pembukuan
