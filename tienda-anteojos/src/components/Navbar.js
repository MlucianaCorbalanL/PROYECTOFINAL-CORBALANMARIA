import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import logo from '../assets/product-images/logo.png'; 

const Navbar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} alt="Logo" style={{ height: '40px' }} /> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Carrito ({cartItems.length})</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





