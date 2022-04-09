import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./styles.scss";

const  CartWidget= ()  => {
  const {cart, cartQuantity} =useContext(CartContext)
  console.log(cart)
  console.log(cartQuantity())

  return (
    <Link to="/cart" className='cartWidget'>
        <ShoppingCartIcon></ShoppingCartIcon>
        <span>{cartQuantity()}</span>
        
    </Link>
   
  )
}

export default CartWidget