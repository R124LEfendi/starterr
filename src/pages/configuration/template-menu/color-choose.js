import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';

import Button from '@mui/material/Button';



function ColorChoose() {


  const input = {
    border: "none",

    // padding: "0.54688rem 0.875rem",
    Color: "#1e2022",

    // lineWeight: "400",
    // lineHeight: "1.6",
    borderRadius: "5",
    backgroundColor: "#fff",
  };

  return (
    <>
      <CardActions style={{ paddingBottom: "8px" }}>
        <Grid container spacing={5}>
          <Grid item xs={3.8}>
            <Typography>
              Warna Template <span style={{ color: 'red' }}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div >
                  <Button variant="contained" size="small" color="inherit" >
                    <input
                      type="color"
                    />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActions >

      <CardActions style={{ paddingTop: "8px" }} >
        <Grid container spacing={5}>
          <Grid item xs={3.8}>
            <Typography>
              Warna Text <span style={{ color: 'red' }}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <div >
                  <Button variant="contained" size="small" color="inherit" >
                    <input
                      type="color"
                    />
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardActions >

    </>


  );

};


export default ColorChoose
