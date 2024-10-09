import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary mt-3">Volver al catálogo</Link>
      </div>
    );
  }

  // Calcular el total del carrito
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>Detalle de Compra</h2>
      <ul className="list-group mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{item.name}</h5>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.price}</p>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                Eliminar
              </button>
            </div>
            <span className="badge bg-success">${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      <h4>Total: ${total}</h4>
      <button className="btn btn-warning" onClick={clearCart}>Vaciar Carrito</button>
      <Link to="/checkout" className="btn btn-success ms-3">Proceder al Pago</Link>
    </div>
  );
};

export default Cart;
