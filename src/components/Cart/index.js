import { Container, Divider, Grid } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem";
import CartResume from "../CartResume";
import "./styles.scss";

const Cart = () => {
  const { cart, cartQuantity, totalCart } = useContext(CartContext);

 

  return (
    <Container alignContent="center" className="cart-list">
      <Grid marginTop={"2em"}>
        <h2>Tu Carrito</h2>
      </Grid>

      <Grid container item >
        <Grid container item={true} xs={8} direction={"row"}>
          {cartQuantity() > 0 ? (
            <Grid>
              <Grid
                container
                item={true}
                direction="row"
                justifyContent="space-around"
                xs={12}
              >
                <Grid item={true}  xs={4}>
                  <h4>Producto</h4>
                </Grid>
                <Grid item={true} xs={5}>
                  <h4>Cantidad</h4>
                </Grid>
                <Grid item={true} xs={1}>
                  <h4>Precio</h4>
                </Grid>
              </Grid>
              <Divider />

              <Grid container item={true} xs={12} direction={"column"} marginTop="2em">
                <Grid
                  container
                  item
                  justifyContent="center"
                  alignContent="center"
                >
                  {cart.map((item) => (
                    <CartItem
                      name={item.name}
                      img={item.img}
                      price={item.price}
                      counter={item.counter}
                      stock={item.stock}
                      id={item.id}
                    ></CartItem>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          ) : (
            <h2>Tu Carrito esta vacio</h2>
          )}
        </Grid>

        <Grid container item={true} xs={4} direction={"row"}>
          <CartResume total={totalCart()}></CartResume>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
