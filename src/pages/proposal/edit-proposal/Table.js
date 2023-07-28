import React from 'react';
import Paper from '@mui/material/Paper';
import { Box, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const CrudData = ({ data, onDelete }) => {

  const tableContainer = {

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
    border: "1px solid black",
    borderCollapse: "collapse",
  }

  return (

    <>

      <Box
      >


        <Paper sx={tableContainer}>

          <table style={tableContainer}>
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
          </table>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>

                <TableRow>
                  <TableCell align="right">Item</TableCell>
                  <TableCell align="right">Jumlah</TableCell>
                  <TableCell align="right">Harga</TableCell>
                  <TableCell align="right">Pajak</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow >

                  <TableCell align="right">gg</TableCell>
                  <TableCell align="right">dfgd</TableCell>
                  <TableCell align="right">dfgd</TableCell>
                  <TableCell align="right">gg</TableCell>
                  <TableCell align="right">dfgd</TableCell>
                  <TableCell align="right">dfgd</TableCell>

                </TableRow>

                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell align="right">dgdff</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Tax</TableCell>
                  <TableCell align="right">fsdf</TableCell>
                  <TableCell align="right">sdfsd</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell align="right">fgddfd</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>


        </Paper>
      </Box>
    </>
  );
};

export default CrudData;
