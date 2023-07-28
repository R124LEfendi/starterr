import React from 'react'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import AddCalendar from '../AddCalendar'
import ProposalTo from '../ProposalTo'
import AddButtonProposal from './AddButtonProposal'
import ProposalList from './ProposalList'
import Reminder from './Reminder'
import MinHeightTextarea from '../TextProposal'
import Crud from './Crud'

function EditProposal() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>

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
        </Grid>



      </Grid>


    </Box>
  )
}

export default EditProposal
