import { ConstructionOutlined } from "@mui/icons-material";
import { isContentEditable } from "@testing-library/user-event/dist/utils";
import { connectFirestoreEmulator } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";

/* Custom provider para carrito de compras --- primero se define CartContext, para poder usarlo en el return de CartContex */

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const itemAdd = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cartQuantity = () => {
    return cart.reduce((acc, prod) => (acc += prod.counter), 0);
  };

  const removeItem = (idItem) => {
    setCart(cart.filter((e) => e.id !== idItem));
  };
  const totalCart = () => {
    return cart.reduce((acc, prod) => (acc += prod.price * prod.counter), 0);
  };

  const modifyCart = (id, count) => {
    setCart(
      cart.map((item) => {
        if (item.id == id) {
          return { ...item, counter: count };
        } else {
          return item;
        }
      })
    );
  };
   const emptyCart = () => {
     setCart ([])
   }
  useEffect(() => {
    //para traer de session storage el cart
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    if (cart) {
      setCart(cart);
    }
  }, []);

  useEffect(() => {
    //para agregar un item al cart
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        itemAdd,
        isInCart,
        cartQuantity,
        removeItem,
        totalCart,
        modifyCart,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
