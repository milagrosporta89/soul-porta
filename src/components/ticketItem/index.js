import {  Grid } from '@mui/material'
import React from 'react'
import "./styles.scss";
import CartItem from '../CartItem';

const TicketItem = ({buyId, buyDetail}) => {
  
  return (
    <>
    <Grid
      container
      className="cartItem"
      display="row"
      xs={12}
      justifyContent="space-between"
      alignItems={"center"}
    >
      <Grid item xs={2}>
        <img src={img}></img>
      </Grid>
      <Grid item xs={2}>
        <p>{name}</p>
      </Grid>
      <Grid
        container
        item
        xs={4}
        direction="row"
        justifyContent={"center"}
        width={"100%"}
        alignSelf={"center"}
      >
        <ItemCount  stock={Number(stock)}
                  counter={count}
                  setCounter={setCount}
                 ></ItemCount>
      </Grid>
      <Grid
       container
       item
       xs={2}
       direction="row"
       justifyContent={"center"}
       width={"100%"}
       alignSelf={"center"}>
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </Grid>
      <Grid
        container
        item
        xs={2}
        direction={"row"}
        justifyContent="flex-end"
        alignSelf={"center"}
      >
        <p>$ {price}</p>
        <IconButton onClick={() => {removeItem(id)}}>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </Grid>
    </Grid>
      <Divider/>
      </>
  );
}

export default TicketItem