import React, { createContext, useContext, useState, useEffect } from 'react';



const CartContext = createContext();

export const CartProvider = ({ children }) => {
 
    const [cart, setCart] = useState(() => {
    const localData = localStorage.getItem('oxivos_cart');
    return localData ? JSON.parse(localData) : [];
  });


  useEffect(() => {
    localStorage.setItem('oxivos_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedColor, selectedSize) => {
    setCart((prevCart) => {
      
        const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.color === selectedColor && item.size === selectedSize
      );

      if (existingItemIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingItemIndex].quantity += 1;
        return newCart;
      }

      return [...prevCart, { ...product, color: selectedColor, size: selectedSize, quantity: 1 }];
    });
  };

  const removeFromCart = (id, color, size) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.color === color && item.size === size)));
  };

  const updateQuantity = (id, color, size, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id && item.color === color && item.size === size) {
          const newQty = item.quantity + amount;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };



  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);