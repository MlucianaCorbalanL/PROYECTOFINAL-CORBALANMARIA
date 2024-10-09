import React from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Catálogo de Anteojos</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
