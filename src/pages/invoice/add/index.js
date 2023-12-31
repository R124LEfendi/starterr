import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import InvoiceCalendar from './InvoceCalendar';
import InvoiceTo from './InvoiceTo';
import ButtonInvoice from './ButtonInvoice';
import SaveInvoice from './SaveInvoice';
import InvoiceList from './InvoiceList';
import Tempo from './Tempo';

function InvoiceAdd() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>

      <Grid container spacing={6}>
        <Grid item spacing={3} xl={9} md={8} xs={12}>

          <InvoiceCalendar />

          <InvoiceTo />

          <ButtonInvoice />

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

export default InvoiceAdd;
