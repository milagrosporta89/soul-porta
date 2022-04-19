import { Divider, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const CartResume = ({total}) => {
  return (
    <Grid container xs={12}justifyContent="flex-start" direction="column"       marginLeft="2em">
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
    
 
        > <button><h2>FINALIZAR COMPRA </h2></button>
      {/*    <Link to="/checkout"></Link>  */}
        </Grid>
        </Grid>
  );
};

export default CartResume;
