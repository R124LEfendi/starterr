import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';


function InvoiceList() {


  const tableContainer = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '30px',
  };

  const tableHead = {
    border: "1px solid black",
    backgroundColor: "lightgrey",
    color: "purple",
  }

  const tableCell = {
    padding: '15px',
    border: "1px solid black"
  }

  return (
    <>
      <Box
      >


        <Paper sx={tableContainer}>
          <div >
            <table >
              <tr style={tableHead}>
                <th style={tableCell}>Aksi</th>
                <th style={tableCell}>Nomor</th>
                <th style={tableCell}>Nama</th>
                <th style={tableCell}>Tanggal</th>
                <th style={tableCell}>Jatuh Tempo</th>
                <th style={tableCell}>Total &#40;IDR&#41;</th>
                <th style={tableCell}>Kurang Bayar</th>
                <th style={tableCell}>Status</th>
              </tr>
              <tr>
                <td style={tableCell}><button>@</button></td>
                <td style={tableCell}>123123145342436547</td>
                <td style={tableCell}>John Doe</td>
                <td style={tableCell}>12/12/2020</td>
                <td style={tableCell}>13/12/2020</td>
                <td style={tableCell}>Rp.500.000,00</td>
                <td style={tableCell}>0</td>
                <td style={tableCell}>Sukses</td>
              </tr>
              <tr>
                <td style={tableCell}><button>@</button></td>
                <td style={tableCell}>Data 2</td>
                <td style={tableCell}>Data 3</td>
                <td style={tableCell}>Data 1</td>
                <td style={tableCell}>Data 2</td>
                <td style={tableCell}>Data 3</td>
                <td style={tableCell}>Data 2</td>
                <td style={tableCell}>Data 3</td>
              </tr>
            </table>
          </div>
        </Paper >
      </Box>
    </>
  )
}

export default InvoiceList
