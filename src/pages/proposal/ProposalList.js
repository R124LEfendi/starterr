import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import ButtonList from './ButtonList';




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
          <div  >
            <table>
              <tr style={tableHead}>
                <th style={tableCell}>Item</th>
                <th style={tableCell}>Jumlah</th>
                <th style={tableCell}>Harga</th>
                <th style={tableCell}>Tanggal</th>
                <th style={tableCell}>Pajak</th>
                <th style={tableCell}>SubTotal &#40;IDR&#41;</th>
                <th style={tableCell}>Aksi</th>

              </tr>
              <tr>
                <td style={tableCell}><ButtonList /> </td>
                <td style={tableCell}>123123145342436547</td>
                <td style={tableCell}>John Doe</td>
                <td style={tableCell}>12/12/2020</td>
                <td style={tableCell}>13/12/2020</td>
                <td style={tableCell}>Rp.500.000,00</td>
                <td style={tableCell}>0</td>

              </tr>
              <tr>
                <td style={tableCell}><ButtonList /></td>
                <td style={tableCell}>Data 2</td>
                <td style={tableCell}>Data 3</td>
                <td style={tableCell}>Data 1</td>
                <td style={tableCell}>Data 2</td>
                <td style={tableCell}>Data 3</td>
                <td style={tableCell}>Data 2</td>

              </tr>
            </table>
          </div>
        </Paper >
      </Box >
    </>
  )
}

export default InvoiceList
