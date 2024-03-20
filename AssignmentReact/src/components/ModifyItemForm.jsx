import React, { useState } from 'react';

const ModifyItemForm = ({ items, onModifyItem, onDeleteItem }) => {
  const [selectedItemId, setSelectedItemId] = useState('');
  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');
  const [updatedImage, setUpdatedImage] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');

  const handleSelectItem = itemId => {
    const selectedItem = items.find(item => item.id === itemId);
    setSelectedItemId(itemId);
    setUpdatedName(selectedItem.name);
    setUpdatedDescription(selectedItem.description);
    setUpdatedImage(selectedItem.image);
    setUpdatedPrice(selectedItem.price);
  };

  const handleModifyItem = e => {
    e.preventDefault();
    const updatedItem = {
      name: updatedName,
      description: updatedDescription,
      image: updatedImage,
      price: parseFloat(updatedPrice),
    };
    onModifyItem(selectedItemId, updatedItem);
    setSelectedItemId('');
    setUpdatedName('');
    setUpdatedDescription('');
    setUpdatedImage('');
    setUpdatedPrice('');
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Modify Item</h2>
        <select className="form-select mb-3" onChange={e => handleSelectItem(e.target.value)}>
          <option value="">Select an item</option>
          {items.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        {selectedItemId && (
          <form onSubmit={handleModifyItem}>
            <div className="mb-3">
              <label htmlFor="updatedNameInput" className="form-label">Name:</label>
              <input type="text" className="form-control" id="updatedNameInput"  value={updatedName} onChange={e => setUpdatedName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="updatedDescInput" className="form-label">Description:</label>
              <textarea className="form-control" id="updatedDescInput"  value={updatedDescription} onChange={e => setUpdatedDescription(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="updatedImageInput" className="form-label">Image URL:</label>
              <input type="text" className="form-control" id="updatedImageInput"  value={updatedImage} onChange={e => setUpdatedImage(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="updatedPriceInput" className="form-label">Price:</label>
              <input type="number" step="0.01" className="form-control" id="updatedPriceInput" value={updatedPrice} onChange={e => setUpdatedPrice(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-info me-2">Modify Item</button>
            <button type="button" className="btn btn-danger" onClick={() => onDeleteItem(selectedItemId)}>Delete Item</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ModifyItemForm;
