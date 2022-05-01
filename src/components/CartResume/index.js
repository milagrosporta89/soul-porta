import { Divider, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./styles.scss";
import { useNavigate } from 'react-router-dom';

const CartResume = ({ total , functionClick}) => {

  const {cart, totalCart, emptyCart } = useContext( CartContext )
  const navigate = useNavigate()

  return (
    <Grid
      container
      xs={12}
      justifyContent="flex-start"
      direction="column"
      marginLeft={{md:"2em", sm:"0"}}
    >
      <Grid
        container
        item
        direction="column"
        alignContent={"start "}
        className="cartResume"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid
          container
          item
          direction="column"
          alignItems={"center"}
          className="title"
        >
          <Grid>
            <h2>TU COMPRA </h2>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid
            container
            item
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <p>Subtotal</p>
            <p>$ {total}</p>
          </Grid>
          <Grid
            container
            item
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <p>Envio</p>
            <p>RETIRO POR LOCAL</p>
          </Grid>
        </Grid>
        <Divider />

        <Grid
          container
          item
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Grid
            container
            item
            direction="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <p>TOTAL</p>
            <p> ${total}</p>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="column"
        alignContent={"start"}
        className="buttonBuy"
      >
       

          <button onClick={(e) => functionClick(e)}>
            <h2>FINALIZAR COMPRA </h2>
          </button>        
  
      </Grid>
    </Grid>
  );
};

export default CartResume;
