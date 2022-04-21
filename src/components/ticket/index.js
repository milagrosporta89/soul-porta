import {  Grid } from '@mui/material'
import React from 'react'
import "./styles.scss";
import CartItem from '../CartItem';

const Ticket = ({buyId, buyDetail}) => {
  return (
    <Grid className="ticket">
      <h1> TU NUMERO DE CONTROL DE ORDEN ES: {buyId}</h1>
      <h4>Acabas de comprar lo siguiente</h4>
      {
        buyDetail.map(item => (
          <CartItem
          name={item.name}

          price={item.price}
          counter={item.counter}
          stock={item.stock}
          id={item.id}
          ></CartItem>
        )

        )
      }
        
    </Grid>
  )
}

export default Ticket