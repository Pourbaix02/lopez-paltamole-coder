/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            return { ...prod, cantidad: prod.cantidad + qty };
          } else {
            return prod;
          }
        })
      );
    } else {
      setCart([...cart, { ...item, cantidad: qty }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const clear = () => {
    setCart([]);
  };

  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
