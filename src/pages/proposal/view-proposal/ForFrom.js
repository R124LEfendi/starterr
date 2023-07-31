import React from 'react'
import Typography from '@mui/material/Typography'

function ForFrom() {

  const container = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",

  }

  return (
    <div style={container}>
      <div>
        <Typography gutterBottom variant="h5" component="div">Dari</Typography>
        <br />
        <Typography gutterBottom variant="h5" component="div">TOKALINK</Typography>
        <Typography gutterBottom variant="h6" component="div">khoirulh1610@gmail.com</Typography>
        <Typography gutterBottom variant="h6" component="div">+6285232843165</Typography>
      </div>
      <div style={{ textAlign: "right" }}>
        <Typography gutterBottom variant="h5" component="div">Proposal</Typography>
        <br />
        <Typography gutterBottom variant="h5" component="div">Proposal/2023/07/0003</Typography>
        <Typography gutterBottom variant="h6" component="div">28 Jul 2023</Typography>
        <Typography gutterBottom variant="h6" component="div">+6285232843165</Typography>
        <br />
        <Typography gutterBottom variant="h5" component="div">No : Proposal/2023/07/0003</Typography>
        <Typography gutterBottom variant="h6" component="div">Masa Berlaku : 04 Aug 2023</Typography>
      </div>
    </div>
  )
}

export default ForFrom
