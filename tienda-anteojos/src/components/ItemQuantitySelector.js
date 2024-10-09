import React, { useState } from 'react';

const ItemQuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    setQuantity(event.target.value);
    onQuantityChange(event.target.value);
  };

  return (
    <input type="number" value={quantity} onChange={handleChange} min="1" />
  );
};

export default ItemQuantitySelector;
