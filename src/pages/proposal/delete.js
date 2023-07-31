import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton({ mode, data, onCrudAction, linkUrl }) {
  const handleButtonClick = () => {
    // Check the mode to decide whether to trigger CRUD action or navigate to a link
    switch (mode) {
      case 'view':
        // Perform view action
        console.log('View:', data);
        break;
      case 'edit':
        // Perform edit action
        console.log('Edit:', data);
        break;
      case 'create':
        // Perform create action
        console.log('Create:', data);
        break;
      case 'delete':
        // Perform delete action
        console.log('Delete:', data);
        break;
      default:
        // Perform link navigation
        window.location.href = linkUrl;
        break;
    }
  };

  // Render the button with appropriate label based on the mode
  return (
    <Button variant="contained" color="primary" onClick={handleButtonClick}>
      {mode === 'view' ? 'View' : mode === 'edit' ? 'Edit' : mode === 'create' ? 'Create' : mode === 'delete' ? 'Delete' : 'Go to Link'}
    </Button>
  );
}
