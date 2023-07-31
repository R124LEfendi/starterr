import { Button } from '@mui/material'
import React from 'react'

function ButtonPdf() {

  const container = {
    marginTop: '20px',
  }

  return (
    <>
      <div style={container}>
        <Button variant="contained" color="primary" fullWidth href="/proposal/view-proposal">Kirim ke email</Button>
      </div>
      <div style={container}>
        <Button variant="contained" color="primary" fullWidth href="/proposal/view-proposal">Ubah</Button>
      </div>
      <div style={container}>
        <Button variant="contained" color="success" fullWidth href="/proposal/view-proposal">Ubah ke Invoice</Button>
      </div>
      <div style={container}>
        <Button variant="contained" color="primary" fullWidth href="/proposal/view-proposal">Cetak/Unduh PDF</Button>
      </div>
      <div style={container}>
        <Button variant="contained" color="error" fullWidth href="/proposal/view-proposal">Hapus</Button>
      </div>
    </>
  )
}

export default ButtonPdf
