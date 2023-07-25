import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next');

const EditItemModal = ({ item, updateItem, onClose }) => {
  const [itemName, setItemName] = useState(item.name);

  const handleUpdateItem = () => {
    updateItem(item.id, itemName);
    onClose();
  };

  return (
    <Modal isOpen={true} onRequestClose={onClose}>
      <h2>Edit Item</h2>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      <button onClick={handleUpdateItem}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </Modal>
  );
};

export default EditItemModal;
