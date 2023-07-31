import React from 'react'
import { Button } from '@mui/material';
import { width } from '@mui/system';

function BottomButton() {

  const simpan = {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '10px',
  }

  const kembali = {
    backgroundColor: "#7367F0",
    borderRadius: "8px",
    width: "100px",
    color: "white",
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between", margin: "10px" }}>
      <div style={{ display: "flex", justifyContent: "flex-start", margin: "10px" }}>
        <Button style={kembali} >
          Kembali
        </Button>
      </div>

      <div style={simpan}>
        <Button ml="50px" variant="contained" color="success">
          Simpan &#x2713;
        </Button>
      </div>
    </div>
  )
}

export default BottomButton
