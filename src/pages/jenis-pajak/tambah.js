import { useState } from 'react';
import Modal from 'react-modal';

const AddItemModal = ({ addItem, onClose }) => {
  const [itemName, setItemName] = useState('');

  const handleAddItem = () => {
    addItem(itemName);
    onClose();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <h2>Add Item</h2>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <button onClick={handleAddItem}>Add</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default AddItemModal;
