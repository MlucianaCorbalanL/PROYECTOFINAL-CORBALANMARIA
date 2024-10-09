import React from 'react';

const AddItemButton = ({ onClick }) => {
  return <button className="btn btn-success" onClick={onClick}>Agregar al Carrito</button>;
};

export default AddItemButton;
