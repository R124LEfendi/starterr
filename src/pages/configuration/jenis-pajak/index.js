import { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// import DeleteConfirmationDialog from './DeleteConfirmationDialog.js';

// import CrudInputModal from './tambah';


const JenisPajak = () => {

  const [items, setItems] = useState([]);
  const [isCrudModalOpen, setCrudModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  // const [editItemId, setEditItemId] = useState(null);
  const [inputData, setInputData] = useState({ id: '', name: '', description: '' });

  const openCrudModal = (mode, item) => {
    setModalMode(mode);

    // setEditItemId(item?.id || null);
    setInputData(item || { id: '', name: '', description: '' });
    setCrudModalOpen(true);
  };

  const closeCrudModal = () => {
    setCrudModalOpen(false);
  };

  const handleItemNameChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddItem = () => {
    const newItem = { ...inputData, id: Date.now() };
    setItems((prevItems) => [...prevItems, newItem]);
    setInputData({ id: '', name: '', description: '' });
    setCrudModalOpen(false);
  };

  const handleUpdateItem = () => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === editItemId ? { ...inputData, id: editItemId } : item))
    );
    setInputData({ id: '', name: '', description: '' });

    // setEditItemId(null);
    setCrudModalOpen(false);
  };

  const handleDeleteItem = (itemId) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this item?');
    if (shouldDelete) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }
  };

  return (
    <Container>
      <h1>Jenis Pajak</h1>
      <Button variant="contained" color="primary" onClick={() => openCrudModal('add', null)}>
        Tambah
      </Button>
      <Modal open={isCrudModalOpen} onClose={closeCrudModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {modalMode === 'add' ? 'Add Item' : 'Edit Item'}
          </Typography>
          <TextField
            fullWidth
            label="Pajak"
            name="id"
            value={inputData.id}
            onChange={handleItemNameChange}
            variant="outlined"
            disabled={modalMode === 'edit'}
          />
          <TextField
            fullWidth
            label="Deskripsi"
            name="name"
            value={inputData.name}
            onChange={handleItemNameChange}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Persentase"
            name="description"
            value={inputData.description}
            onChange={handleItemNameChange}
            variant="outlined"
          />
          <Button
            onClick={modalMode === 'add' ? handleAddItem : handleUpdateItem}
            color="primary"
            variant="contained"
            sx={{ mt: 2, mr: 2 }}
          >
            {modalMode === 'add' ? 'Tambah' : 'Save'}
          </Button>
          {modalMode === 'edit' && (
            <Button onClick={() => handleDeleteItem(editItemId)} color="error" variant="contained" sx={{ mt: 2 }}>
              Hapus
            </Button>
          )}
          <Button onClick={closeCrudModal} variant="outlined" sx={{ mt: 2 }}>
            Batal
          </Button>
        </Box>
      </Modal>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Pajak</TableCell>
              <TableCell>Deskripsi</TableCell>
              <TableCell>Persentase</TableCell>
              <TableCell>Aksi</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>          <TextField
                  fullWidth
                  label="Persentase"
                  name="description"
                  value={item.name}

                  variant="outlined"
                /></TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  <Button onClick={() => openCrudModal('edit', item)}>Edit</Button>
                  <Button onClick={() => handleDeleteItem(item.id)} color="error">
                    Hapus
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};


export default JenisPajak
