import React from 'react'
import Typography from '@mui/material/Typography'


function TitlePdf() {

  const container = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",

  }


  return (
    <div style={container}>
      <div>
        <img src="/images/apple-touch-icon.png" alt="logo" />
      </div>
      <div style={{ textAlign: "right" }}>
        <Typography gutterBottom variant="h1" component="div">Proposal</Typography>
        <Typography gutterBottom variant="h3" component="div">Proposal/2023/07/0003</Typography>
        <Typography gutterBottom variant="h5" component="div">28 Jul 2023</Typography>
      </div>
    </div>
  )
}

export default TitlePdf
