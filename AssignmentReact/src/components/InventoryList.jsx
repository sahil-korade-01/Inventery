import React from 'react';
const InventoryList = ({ items, onDeleteItem }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title">Inventory</h2>
        <ul className="list-group">
          {items.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.name}</strong> - {item.description} - ${item.price}
              </div>
              <button type="button" className="btn btn-danger" onClick={() => onDeleteItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default InventoryList;
