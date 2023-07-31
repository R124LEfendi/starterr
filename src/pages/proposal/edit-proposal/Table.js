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


    color: "white",
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



          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead sx={{ backgroundColor: "#7367F0", color: "white" }}>

                <TableRow  >
                  <TableCell style={tableHead} align="right">Item</TableCell>
                  <TableCell style={tableHead} align="right">Jumlah</TableCell>
                  <TableCell style={tableHead} align="right">Harga</TableCell>
                  <TableCell style={tableHead} align="right">Subtotal</TableCell>
                  <TableCell style={tableHead} align="right">Pajak</TableCell>
                  <TableCell style={tableHead} align="right">Total Diskon</TableCell>
                  <TableCell style={tableHead} align="right">Total Setelah Diskon</TableCell>
                  <TableCell style={tableHead} align="right">Action</TableCell>
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
      </Box >
    </>
  );
};

export default CrudData;
