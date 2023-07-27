import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AddCalendar from '../add/AddCalendar';
import InvoiceTo from '../add/InvoiceTo';
import SaveInvoice from '../add/SaveInvoice';
import InvoiceList from '../add/InvoiceList';
import EditInvoiceButton from './editInvoiceButton';
import Tempo from '../add/Tempo';

function InvoiceEdit() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>

      <Grid container spacing={6}>
        <Grid item spacing={3} xl={9} md={8} xs={12}>

          <AddCalendar />

          <InvoiceTo />

          <EditInvoiceButton />

          <InvoiceList />

        </Grid>

        <Grid item xl={3} md={8} xs={12}>
          <SaveInvoice />
          <Tempo />
        </Grid>

      </Grid>


    </Box>
  );
}

export default InvoiceEdit;
