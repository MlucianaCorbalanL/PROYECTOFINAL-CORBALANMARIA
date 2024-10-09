import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget d-flex align-items-center">
      <span className="fs-3 me-2">🛒</span>
      <span className="badge bg-secondary">0</span>
    </div>
  );
};

export default CartWidget;
