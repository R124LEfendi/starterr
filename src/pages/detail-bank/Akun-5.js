import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card'

function AkunLima() {
  return (
    <Grid item md={6} xs={12}>
      <Card>


        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Akun Bank 5
            </Typography>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={5}>
            <Grid item xs={3.8}>

              <Typography>
                Nama Bank <span style={{ color: 'red' }}>*</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm container style={{ padding: "0", height: "5", margin: "0" }}>
              <Grid item xs container direction="column" spacing={2}>

                <Grid item xs>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '60' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField Required id="Nama" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </CardActions>

        <CardActions>
          <Grid container spacing={5}>
            <Grid item xs={3.8}>

              <Typography>
                Cabang Bank <span style={{ color: 'red' }}>*</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm container style={{ padding: "0", height: "5", margin: "0" }}>
              <Grid item xs container direction="column" spacing={2}>

                <Grid item xs>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '60' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField Required id="Cabang" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </CardActions>

        <CardActions>
          <Grid container spacing={5}>
            <Grid item xs={3.8}>

              <Typography>
                Nomor Rekening <span style={{ color: 'red' }}>*</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm container style={{ padding: "0", height: "5", margin: "0" }}>
              <Grid item xs container direction="column" spacing={2}>

                <Grid item xs>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '60' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField Required id="Nomor" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </CardActions>

        <CardActions>
          <Grid container spacing={5}>
            <Grid item xs={3.8}>

              <Typography>
                Atas Nama <span style={{ color: 'red' }}>*</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sm container style={{ padding: "0", height: "5", margin: "0" }}>
              <Grid item xs container direction="column" spacing={2}>

                <Grid item xs>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '60' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField Required id="Atas" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </CardActions>

        <CardActions>
          <Grid container spacing={5}>
            <Grid item xs={3.8}>

              <Typography>
                Swift code
              </Typography>
            </Grid>
            <Grid item xs={12} sm container style={{ padding: "0", height: "5", margin: "0" }}>
              <Grid item xs container direction="column" spacing={2}>

                <Grid item xs>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '60' },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField Required id="Swift" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </CardActions>

      </Card>
    </Grid>

  )
}

export default AkunLima
