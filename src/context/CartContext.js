import { createContext, useState } from "react";

/* Custom provider para carrito de compras --- primero se define CartContext, para poder usarlo en el return de CartContex */

export const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cart, setCart] =useState([])
    const itemAdd= (item) => {
      setCart([...cart, item])
    }
  
    const isInCart= (id) =>{
      return cart.some((prod) => prod.id === id)
    }
  
    const cartQuantity = () => {
  
      return cart.reduce((acc, prod) => acc += prod.counter,0 )
    }
    return(
        <CartContext.Provider  value={ {
            cart,
            itemAdd, 
            isInCart, 
            cartQuantity}} >
                {children}

        </CartContext.Provider>
    )


}

export default CartProvider