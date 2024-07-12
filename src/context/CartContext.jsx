import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    const newItem = {
      ...productToAdd,
      quantity,
    };

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === productToAdd.id);
      if (existingItem) {
        // If item already exists in the cart, update the quantity
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If item doesn't exist in the cart, add the new item
        return [...prevCart, newItem];
      }
    });
  };
  const clearCart = () => setCart([]);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  console.log(cart);
  return (
    <CartContext.Provider
      value={{ cart, addItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };
