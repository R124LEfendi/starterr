import React, { useState } from 'react';
import Table from './Table';
import { Box, InputBase, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CrudData from './Table';



const Crud = () => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [harga, setHarga] = useState('');
  const [pajak, setPajak] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subtotal = jumlah * harga * (1 + pajak / 100);
    setData([...data, { item, jumlah, harga, pajak, subtotal }]);
    setItem('');
    setJumlah('');
    setHarga('');
    setPajak('');
  };

  const handleDelete = (index) => {
    const newData = data.filter((_, idx) => idx !== index);
    setData(newData);
  };

  const tableContainer = {

    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderCollapse: "collapse",

  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {

            width: '100%',
          },
        }}>
        <Paper elevation={3} sx={{ minHeight: "500px" }}>
          <div >
            <h1>CRUD Table</h1>
            <form onSubmit={handleSubmit}  >
              <div style={{ justifyContent: "space-between", display: "flex", }}>
                <table style={tableContainer}>
                  <tr style={{ border: " 1px solid black", justifyContent: "center" }} >
                    <td style={{ border: " 1px solid black", justifyContent: "center" }}>                  <TextField type="text" value={item} onChange={(e) => setItem(e.target.value)} placeholder="Item" />
                      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                      </IconButton></td>
                    <td style={{ border: " 1px solid black", justifyContent: "center" }}><TextField type="number" value={jumlah} onChange={(e) => setJumlah(e.target.value)} placeholder="Jumlah" /></td>
                    <td style={{ border: " 1px solid black", justifyContent: "center" }}><TextField type="number" value={harga} onChange={(e) => setHarga(e.target.value)} placeholder="Harga" /></td>
                    <td style={{ border: " 1px solid black", justifyContent: "center" }}><TextField type="number" value={pajak} onChange={(e) => setPajak(e.target.value)} placeholder="Pajak" /></td>
                  </tr>
                </table>
              </div>




              <div style={{ justifyContent: "end", height: "150px", alignItems: "center", display: "flex" }}><Button type="submit" color="primary">Tambah</Button></div>

              <CrudData data={data} onDelete={handleDelete} />



            </form>

          </div>
        </Paper >
      </Box >
    </>
  );
};

export default Crud;
