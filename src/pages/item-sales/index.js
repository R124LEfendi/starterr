import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import TypeItem from './TypeItem'

function ItemSales() {
  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Paper>

        <Grid container spacing={6}>
          <Grid item spacing={3} xl={12} md={12} xs={12}>

            <TypeItem />

          </Grid>
        </Grid>
      </Paper>

    </Box>
  )
}

export default ItemSales
