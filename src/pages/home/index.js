// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';
import Nama from './Nama';
import Email from './Email';
import Website from './Website';
import Telephone from './Telephone';
import Fax from './Fax';
import Alamat from './Alamat';
import Pos from './Pos';
import Npwp from './Npwp';

function Home() {

  const simpan = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px',
  }

  return (
    <Grid item md={6} xs={12}>
      <Card>

        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" color="black" component="div">
              Informasi Perusahaan
            </Typography>
            <Typography variant="body2" color="black">
              Informasi perusahaan akan ditampilkan dalam proposal dan invoice
            </Typography>
          </CardContent>
        </CardActionArea>

        <Nama />

        <Email />

        <Website />

        <Telephone />

        <Fax />

        <Alamat />

        <Pos />

        <Npwp />


        <div className='simpan' style={simpan}>

          <Button ml="50px" variant="contained" color="success">
            Simpan &#x2713;
          </Button>
        </div>
        <br />

      </Card>
    </Grid>
  )
}

export default Home
