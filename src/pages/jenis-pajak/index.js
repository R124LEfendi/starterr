import { useState } from 'react';
import AddItemModal from './tambah';
import EditItemModal from './edit';

const JenisPajak = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },

    // Add more initial items if needed
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const addItem = (itemName) => {
    const newItem = { id: Date.now(), name: itemName };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const updateItem = (itemId, itemName) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, name: itemName } : item))
    );
  };

  const deleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setShowEditModal(true);
  };

  return (
    <div>
      <h1>CRUD in a Pop-up Modal</h1>
      <button onClick={handleAddClick}>Add</button>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => handleEditClick(item)}>Edit</button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
      {showAddModal && <AddItemModal addItem={addItem} onClose={() => setShowAddModal(false)} />}
      {showEditModal && (
        <EditItemModal
          item={selectedItem}
          updateItem={updateItem}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default JenisPajak;
