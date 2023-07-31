import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import AddCalendar from '../AddCalendar'
import ProposalTo from '../ProposalTo'
import Reminder from './Reminder'
import MinHeightTextarea from '../TextProposal'
import Crud from './Crud'
import Paper from '@mui/material/Paper'
import BottomButton from './BottomButton'

function EditProposal() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Paper>

        <Grid container spacing={6}>
          <Grid item spacing={3} xl={12} md={12} xs={12}>

            <AddCalendar />

            <ProposalTo />

            <Reminder />
            {/*
          <AddButtonProposal /> */}
            <Crud />

            {/* <ProposalList /> */}



            <MinHeightTextarea />

            <BottomButton />
          </Grid>



        </Grid>
      </Paper>

    </Box>
  )
}

export default EditProposal
