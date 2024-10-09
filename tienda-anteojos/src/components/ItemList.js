import React from 'react';
import { Link } from 'react-router-dom';
import imagen1 from '../assets/product-images/anteojos 1.png';
import imagen2 from '../assets/product-images/anteojos 2.png';
import imagen3 from '../assets/product-images/anteojos 3.png';
import imagen4 from '../assets/product-images/anteojos 4.png';
import imagen5 from '../assets/product-images/anteojos 5.png';
import imagen6 from '../assets/product-images/anteojos 6.png';
import imagen7 from '../assets/product-images/anteojos 7.png';
import imagen8 from '../assets/product-images/anteojos 8.png';
import imagen9 from '../assets/product-images/anteojos 9.png';
import imagen10 from '../assets/product-images/anteojos 10.png';
import imagen11 from '../assets/product-images/anteojos 11.png';
import imagen12 from '../assets/product-images/anteojos 12.png';
import imagen13 from '../assets/product-images/anteojos 13.png';
import imagen14 from '../assets/product-images/anteojos 14.png';
import imagen15 from '../assets/product-images/anteojos 15.png';

const ItemList = () => {
  const products = [
    { id: 1, name: 'ACTIVIST BIO-48 POL', price: 98000, image: imagen1 },
    { id: 2, name: 'BENITO FERNANDEZ 18016 C1', price: 85000, image: imagen2 },
    { id: 3, name: 'BENITO FERNANDEZ 18225 C1', price: 86000, image: imagen3 },
    { id: 4, name: 'BENITO FERNANDEZ 18225 C2', price: 86000, image: imagen4 },
    { id: 5, name: 'BENITO FERNANDEZ 18016 C2', price: 85000, image: imagen5 },
    { id: 6, name: 'ROLLING STONES - BURDEN C1 POLARIZED', price: 120000, image: imagen6 },
    { id: 7, name: 'ROLLING STONES - BURDEN C2 POLARIZED', price: 120000, image: imagen7 },
    { id: 8, name: 'ROLLING STONES - BURDEN C3 POLARIZED', price: 120000, image: imagen8 },
    { id: 9, name: 'ROLLING STONES - I SEE C1UCS11', price: 95000, image: imagen9 },
    { id: 10, name: 'ROLLING STONES - I SEE C6GG3215', price: 95000, image: imagen10 },
    { id: 11, name: 'ROLLING STONES- I CAN C1UCS11', price: 80000, image: imagen11 },
    { id: 12, name: 'ROLLING STONES- I CAN C3GG3326', price: 80000, image: imagen12 },
    { id: 13, name: 'VULK SUOKET MBLKREVO BLUE', price: 110000, image: imagen13 },
    { id: 14, name: 'VULK SUOKET MBLKREVO RED', price: 110000, image: imagen14 },
    { id: 15, name: 'VULK SUOKET MBLKUV05', price: 110000, image: imagen15 },
  ];

  return (
    <div className="row">
      {products.map(product => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body text-center">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text fw-bold text-success">${product.price}</p>
              <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalles</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;


