import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const DeleteConfirmationDialog = ({ open, onCancel, onDeleteConfirmed }) => {
  return (
    <Modal open={open} onClose={onCancel}>
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
          Confirm Delete
        </Typography>
        <Typography variant="body1" gutterBottom>
          Are you sure you want to delete this item?
        </Typography>
        <Button onClick={onDeleteConfirmed} color="primary" variant="contained" sx={{ mt: 2, mr: 2 }}>
          Delete
        </Button>
        <Button onClick={onCancel} color="error" variant="contained" sx={{ mt: 2 }}>
          Cancel
        </Button>
      </Box>
    </Modal>
  );
};

export default DeleteConfirmationDialog;
