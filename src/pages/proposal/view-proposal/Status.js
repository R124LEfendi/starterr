import { Typography } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

function Status() {
  return (

    <div >
      <Typography gutterBottom variant="h5" component="div">Status :</Typography>
      <Typography gutterBottom variant="h5" component="div">kjvhkh</Typography>
      <br />
      <Typography gutterBottom variant="h5" component="div">Pengingat :</Typography>
      <FormGroup>
        <FormControlLabel disabled control={<Checkbox defaultChecked />} label="Pada saat jatuh tempo" />
        <FormControlLabel disabled control={<Checkbox defaultChecked />} label="1 hari setelah jatuh tempo" />
        <FormControlLabel disabled control={<Checkbox defaultChecked />} label="3 hari setelah jatuh tempo" />
        <FormControlLabel disabled control={<Checkbox defaultChecked />} label="7 hari setelah jatuh tempo" />
        <FormControlLabel disabled control={<Checkbox />} label="14 hari setelah jatuh tempo" />
        <FormControlLabel disabled control={<Checkbox />} label="30 hari setelah jatuh tempo" />
        <FormControlLabel disabled control={<Checkbox />} label="60 hari setelah jatuh tempo" />
        <FormControlLabel disabled control={<Checkbox />} label="90 hari setelah jatuh tempo" />
      </FormGroup>
    </div>

  )
}

export default Status
