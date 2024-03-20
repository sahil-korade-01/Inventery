import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItemForm from './components/AddItemForm';
import ModifyItemForm from './components/ModifyItemForm';
import InventoryList from './components/InventoryList';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = newItem => {
    setItems([...items, newItem]);
  };

  const handleModifyItem = (itemId, updatedItem) => {
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, ...updatedItem } : item
    );
    setItems(updatedItems);
  };

  const handleDeleteItem = itemId => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Product Admin</h1>
      <AddItemForm onAddItem={handleAddItem} />
      <ModifyItemForm items={items} onModifyItem={handleModifyItem} onDeleteItem={handleDeleteItem} />
      <InventoryList items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
};

export default App;
