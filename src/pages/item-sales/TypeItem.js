import React from 'react'

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';





function TypeItem() {

  return (
    <>


      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Tipe :</FormLabel>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Cari"
            inputProps={{ 'aria-label': 'Cari' }}
          />
          <IconButton type="button" sx={{ p: '10px', display: "flex" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="barang" control={<Radio />} label="Barang" />
          <FormControlLabel value="jasa" control={<Radio />} label="Jasa" />

        </RadioGroup>
      </FormControl>

    </>
  )
}

export default TypeItem
