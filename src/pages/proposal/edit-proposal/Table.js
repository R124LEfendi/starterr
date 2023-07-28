import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { calculateSubtotal, calculateTotal } from './total';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const CrudData = ({ data, onDelete }) => {

  const tableContainer = {
    padding: "6px",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderCollapse: "collapse",

  };

  const tableHead = {


    color: "purple",
  }

  const tableCell = {
    padding: '20px',
    border: "1px black",

    borderRound: "10px",
  }

  return (

    <>

      <Box
      >

        <div style={tableContainer} >


          {/* <table style={tableContainer}>
            <thead style={tableHead}>
              <tr>
                <th style={tableCell}>Item</th>
                <th style={tableCell}>Jumlah</th>
                <th style={tableCell}>Harga</th>
                <th style={tableCell}>Pajak</th>
                <th style={tableCell}>Subtotal</th>
                <th style={tableCell}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td style={tableCell}>{item.item}</td>
                  <td style={tableCell}>{item.jumlah}</td>
                  <td style={tableCell}>{item.harga}</td>
                  <td style={tableCell}>{item.pajak}</td>
                  <td style={tableCell}>{item.subtotal}</td>
                  <td>
                    <button onClick={() => onDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>

                <TableRow style={tableCell}>
                  <TableCell align="right">Item</TableCell>
                  <TableCell align="right">Jumlah</TableCell>
                  <TableCell align="right">Harga</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                  <TableCell align="right">Pajak</TableCell>
                  <TableCell align="right">Total Diskon</TableCell>
                  <TableCell align="right">Total Setelah Diskon</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index} style={tableCell} >

                    <TableCell style={tableCell} align="right">{item.item}</TableCell>
                    <TableCell style={tableCell} align="right">{item.totalItem}</TableCell>
                    <TableCell style={tableCell} align="right">{item.price}</TableCell>
                    <TableCell style={tableCell} align="right">{calculateSubtotal(item)}</TableCell>
                    <TableCell style={tableCell} align="right">{item.tax}</TableCell>
                    <TableCell style={tableCell} align="right">{item.discount}</TableCell>
                    <TableCell style={tableCell} align="right">{calculateTotal(item)}</TableCell>
                    <TableCell style={tableCell} align="right"><Button color="error" onClick={() => onDelete(index)}>Delete</Button></TableCell>
                    {/*
                    <TableCell></TableCell>
                    <TableCell align="right">Pajak</TableCell>
                    <TableCell align="right">{item.tax}</TableCell>


                    <TableCell >Diskon</TableCell>
                    <TableCell align="right">{item.discount}</TableCell>

                    <TableCell >Total</TableCell>
                    <TableCell align="right">{calculateTotal(item)}</TableCell> */}
                  </TableRow>


                ))}

                <TableRow>

                </TableRow>
                <TableRow>

                </TableRow>
                <TableRow>

                </TableRow>

              </TableBody>

            </Table>
          </TableContainer>

        </div>
      </Box>
    </>
  );
};

export default CrudData;
