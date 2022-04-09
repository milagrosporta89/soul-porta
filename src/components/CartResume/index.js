import { Divider, Grid } from "@mui/material";
import React from "react";
import "./styles.scss";

const CartResume = () => {
  return (
    <>
    <Grid
      container
      item
      direction="column"
      alignContent={"start "}
      className="cartResume"
      marginLeft="2em"

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
          <p>$1500</p>
        </Grid>
        <Grid
          container
          item
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <p>Envio</p>
          <p>$1500</p>
        </Grid>
        </Grid>
        <Divider />

      <Grid        container
          item
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end">

        <Grid
          container
          item
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
     

        >
          <p>TOTAL</p>
          <p>$1500</p>
        </Grid>
        

      </Grid>
     
    </Grid>
        <Grid
         container
         item
         direction="column"
         alignContent={"start"}
         className="buttonBuy"
         marginLeft="2em"
        >
          <button><h2>FINALIZAR COMPRA </h2></button>
        </Grid>
        </>
  );
};

export default CartResume;
