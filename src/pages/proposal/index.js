import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddCalendar from './AddCalendar';
import ProposalTo from './ProposalTo';
import ButtonProposal from './ButtonProposal';
import ProposalList from './ProposalList';
import Paper from '@mui/material/Paper';
import ButtonList from './ButtonList';


function Proposal() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>

      <Paper>

        <Grid container spacing={6}>
          <Grid item spacing={3} xl={12} md={12} xs={12}>

            <AddCalendar />

            <ProposalTo />

            {/* <Reminder /> */}

            <ButtonProposal />

            <ProposalList />




          </Grid>



        </Grid>

      </Paper>
    </Box>
  );
}

export default Proposal;
