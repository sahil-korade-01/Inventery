import React, { useState } from 'react';

const AddItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9), 
      name,
      description,
      image,
      price: parseFloat(price),
    };
    onAddItem(newItem);
    setName('');
    setDescription('');
    setImage('');
    setPrice('');
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Add New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">Name:</label>
            <input type="text" className="form-control" id="nameInput" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="descInput" className="form-label">Description:</label>
            <textarea className="form-control" id="descInput" value={description} onChange={e => setDescription(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="imageInput" className="form-label">Image URL:</label>
            <input type="text" className="form-control" id="imageInput" value={image} onChange={e => setImage(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="priceInput" className="form-label">Price:</label>
            <input type="number" step="0.01" className="form-control" id="priceInput" value={price} onChange={e => setPrice(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemForm;
