import React from 'react'
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { display } from '@mui/system';

function Reminder() {





  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {

            width: '100%',
          },
        }}>
        <div style={{ padding: "40px", display: "flex", alignItems: "center", justify: "center" }}>
          <div >
            <FormControlLabel control={<Checkbox defaultChecked />} label="Pada saat jatuh tempo" />
            <FormControlLabel control={<Checkbox />} label="14 hari setelah jatuh tempo" />


          </div>
          <div >

            <FormControlLabel control={<Checkbox defaultChecked />} label="1 hari setelah jatuh tempo" />
            <FormControlLabel control={<Checkbox />} label="30 hari setelah jatuh tempo" />
          </div>
          <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="3 hari setelah jatuh tempo" />
            <FormControlLabel control={<Checkbox />} label="60 hari setelah jatuh tempo" />
          </div>
          <div>
            <FormControlLabel control={<Checkbox defaultChecked />} label="7 hari setelah jatuh tempo" />
            <FormControlLabel control={<Checkbox />} label="90 hari setelah jatuh tempo" />
          </div>


        </div>
      </Box>
    </>

  )
}

export default Reminder
