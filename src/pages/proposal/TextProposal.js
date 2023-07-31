import * as React from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function MinHeightTextarea() {
  const [value, setValue] = React.useState('Mohon dilakukan pembayaran ke rekening:\n\n@namabank1\n@cabangbank1\n@norekening1\n@namarekening1\n==========================================\n@namabank2\n@cabangbank2\n@norekening2\n@namarekening2\n=========================================\n@namabank3\n@cabangbank3\n@norekening3\n@namarekening3\n=========================================\n@namabank4\n@cabangbank4\n@norekening4\n@namarekening4\n=========================================\n@namabank5\n@cabangbank5\n@norekening5\n@namarekening5');

  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;

    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 10px;
    margin: 10px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  const divStyle = {
    padding: '20px',



  }

  return (


    <div style={divStyle}>

      <Grid container spacing={2} columns={16} sx={{ justifyContent: "space-around" }}>
        <Grid item xs={12} xl={7}>

          <Typography variant="h5" component="div" sx={{ flexGrow: 5 }} >
            Informasi Rekening <span style={{ color: 'red' }}>*</span>
          </Typography>
          <StyledTextarea
            aria-label="empty textarea"
            m="100"
            placeholder={value}
            minRows={2}
            maxRows={4} />
        </Grid>
        <Grid item xs={12} xl={7}>


          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
            Informasi Rekening <span style={{ color: 'red' }}>*</span>
          </Typography>
          <StyledTextarea aria-label="empty textarea" placeholder="Empty" minRows={4}
            maxRows={4} />

        </Grid>
      </Grid>





    </div>


  );
}
