import { Container, Divider, Grid } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem";
import CartResume from "../CartResume";
import "./styles.scss";

const Cart = () => {
  const { cart, cartQuantity } = useContext(CartContext);

  return (
    <Container alignContent="center" className="cart-list">
      <Grid marginTop={"2em"}>
        <h2>Tu Carrito</h2>
      </Grid>
      <Grid container item sx={12}>
        <Grid container item xs={8} direction={"row"}>
          <Grid>
            <Grid
              container
              item
              direction="row"
              justifyContent="space-around"
              xs={12}
            >
              <Grid item xs={4}>
              <h4>Producto</h4>
              </Grid>
              <Grid  item xs= {5} >
              <h4>Cantidad</h4>
              </Grid>
              <Grid item xs={1}>
              <h4>Precio</h4>

              </Grid>



            </Grid>
              <Divider/>

            <Grid container item xs={12} direction={"column"} marginTop="2em">
              <Grid
                container
                item
                justifyContent="center"
                alignContent="center"
              >
                <CartItem></CartItem>
                <CartItem></CartItem>
              </Grid>
            </Grid>
          </Grid>
   
        </Grid>
        <Grid container item xs={4} direction={"row"}>
        <CartResume></CartResume>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
