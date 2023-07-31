import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TitlePdf from './TitlePdf'
import ForFrom from './ForFrom'
import TablePdf from './TablePdf'
import Status from './Status'
import ButtonPdf from './ButtonPdf'

function ViewProposal() {
  return (
    <>
      <Box sx={{ flexGrow: 1, m: 1 }}>

        <Grid container spacing={6} >
          <Grid item spacing={3} xl={9} md={8} xs={12}>
            <Paper>
              <TitlePdf />
              <ForFrom />
              <TablePdf />
            </Paper>


          </Grid>

          <Grid item xl={3} md={8} xs={12} >
            <Paper >
              <div style={{ padding: "20px" }}>
                <Status />
              </div>
            </Paper>
            <Paper >
              <div style={{ padding: "20px", marginTop: "20px" }}>
                <ButtonPdf />
              </div>
            </Paper>
          </Grid>
        </Grid>


      </Box>
    </>

  )
}

export default ViewProposal
