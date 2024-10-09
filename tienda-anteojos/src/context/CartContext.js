import React, { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find(item => item.id === product.id);
      if (itemInCart) {
        
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

 
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

 
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
