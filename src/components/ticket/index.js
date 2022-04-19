import {  Grid } from '@mui/material'
import React from 'react'
import "./styles.scss";

const Ticket = ({buyId, buyDetail}) => {
  return (
    <Grid className="ticket">
        <h1> TU NUMERO DE CONTROL DE ORDEN ES: {buyId}</h1>
        <h4>Acabas de comprar lo siguiente</h4>
        
    </Grid>
  )
}

export default Ticket