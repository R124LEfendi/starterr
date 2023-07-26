import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CardActions } from '@mui/material';

import Button from '@mui/material/Button';



function FileChoose() {

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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

    <CardActions>
      <Grid container spacing={5}>
        <Grid item xs={3.8}>
          <Typography>
            Logo Perusahaan <span style={{ color: 'red' }}>*</span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>

              <div >
                <Button variant="contained" size="small" color="inherit" >
                  <input className='input' style={input} type="file" accept="image/*" onChange={handleImageChange} /></Button>


                {selectedImage && <img src={selectedImage} alt="Selected" />}


              </div>

            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </CardActions>
  );

};


export default FileChoose
