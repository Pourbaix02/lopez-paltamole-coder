/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const prodFromLocalStorage = JSON.parse(localStorage.getItem('carrito')) || []
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(prodFromLocalStorage);

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(cart))

  },[cart])


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

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc + prod.cantidad), 0)
  }

  const cartTotal = () => {
    return cart.reduce((acc, prod)=> (acc += prod.price * prod.cantidad), 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clear, removeItem, cartQuantity, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
