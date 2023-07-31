import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CrudInputModal = ({ open, onClose, items, setItems }) => {
  const [modalMode, setModalMode] = useState('add');
  const [editItemId, setEditItemId] = useState(null);
  const [inputData, setInputData] = useState({ id: '', name: '', description: '' });

  const handleAddItem = () => {
    const newItem = { ...inputData, id: Date.now() };
    setItems((prevItems) => [...prevItems, newItem]);
    setInputData({ id: '', name: '', description: '' });
    onClose();
  };

  const handleUpdateItem = () => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === editItemId ? { ...inputData, id: editItemId } : item))
    );
    setInputData({ id: '', name: '', description: '' });
    setEditItemId(null);
    onClose();
  };

  const handleDeleteItem = () => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== editItemId));
    setInputData({ id: '', name: '', description: '' });
    setEditItemId(null);
    onClose();
  };

  const handleItemNameChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEditButtonClick = (item) => {
    setModalMode('edit');
    setEditItemId(item.id);
    setInputData(item);
  };

  return (
    <Modal open={open} onClose={onClose}>
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
          label="ID"
          name="id"
          value={inputData.id}
          onChange={handleItemNameChange}
          variant="outlined"
          disabled={modalMode === 'edit'}
        />
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={inputData.name}
          onChange={handleItemNameChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Description"
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
          {modalMode === 'add' ? 'Add' : 'Save'}
        </Button>
        {/* {modalMode === 'edit' && (
          <Button onClick={handleDeleteItem} color="secondary" variant="contained" sx={{ mt: 2 }}>
            Delete
          </Button>
        )} */}
        <Button onClick={onClose} variant="outlined" sx={{ mt: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default CrudInputModal;
