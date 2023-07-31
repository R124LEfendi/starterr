import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';


const actions = ['Hapus', 'Lihat', 'Edit', 'Cetak'];

function SimpleDialog(props) {
  const { onClose, selectedValue, anchorEl, open } = props;

  const handleClose = (value) => {
    if (value !== null) {
      onClose(value);
    } else {
      onClose(selectedValue);
    }
  };

  const handleListItemClick = (value) => {
    handleClose(value);
  };


  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose} // Handle popover onClose event here
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <List sx={{ pt: 0 }}>
        {actions.map((action) => (
          <ListItem disableGutters key={action}>
            <ListItemButton onClick={() => handleListItemClick(action)}>
              <ListItemText primary={action} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Popover>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  anchorEl: PropTypes.object,
};

export default function SimpleDialogDemo() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(actions[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    setSelectedValue(value);
    switch (value) {
      case 'Hapus':
        window.location.href = '/delete-page';
        break;
      case 'Lihat':
        window.location.href = '/proposal/view-proposal';
        break;
      case 'Edit':
        window.location.href = '/proposal/edit-proposal';
        break;
      case 'Cetak':
        window.location.href = '/print-page';
        break;
      default:
        // Do nothing or handle other cases
        break;
    }
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <br />
      <Button variant="outlined" onClick={handleClick}>
        @
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} anchorEl={anchorEl} onClose={handleClose} />
    </div>
  );
}
