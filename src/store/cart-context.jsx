import { createContext } from "react";
import { useState, useEffect, useContext } from "react";

// const initialCartContext = {
//   cart: [],
//   setCart: () => {},
//   addToCart: (totalQuantity) => {
//     // totalQuantity + 1;
//     // return totalQuantity;
//     console.log("a product added to cart");
//   },
//   removeFromCart: () => {},
//   totalQuantity: 0,
// };

//STEP 1
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (error) {
      console.error("Failed to parse casrt", error);
      return [];
    }
  });

  //use cart to localStorage for better experience for user, not to lost his data
  //if user refreshes the browser
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("failed to parse cart", error);
    }
  }, [cart]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === product.productId,
      );

      if (existingItem) {
        return prevCart.map((item) => {
          item.productId === product.productId
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      }

      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      prevCart.filter((item) => item.productId !== productId);
    });
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
