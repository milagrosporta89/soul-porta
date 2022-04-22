import {  Grid } from '@mui/material'
import React, { useState } from 'react'
import "./styles.scss";
import CartItem from '../CartItem';



const Ticket = ({buyId, buyDetail}) => {

  return (
    <Grid className="ticket">
      
      <h1> {buyDetail?.buyer?.name}, </h1>
      <h1> TU NUMERO DE CONTROL DE ORDEN ES: {buyId}</h1>
      <h1> Acabamos de enviar a {buyDetail?.buyer?.email} un detalle de la compra </h1>
      <h4>Acabas de comprar lo siguiente</h4>
    
        
    </Grid>
  )
}

export default Ticket