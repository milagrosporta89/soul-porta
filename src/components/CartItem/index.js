import { Grid } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount";
import "./styles.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = () => {
  const { cart, cartQuantity } = useContext(CartContext);
  const [provCart, setProvCart] = useState(cart);

  const info = {
    name: "CHAPAS DE AGATHA",
    description_short: "Amuleto protector",
    description_long:
      "Chapas de ágata con cordón gamuzado o cadena. El agata es una piedra protectora que aporta calma y tranquilidad",
    price: "$1800",
    img: "/img/chapa de agatha.jpg",
    category: "pulseras",
    id: 2,
    stock: 7,
  };

  useEffect(() => {
    setProvCart(cart);
  }, []);
  return (
    <Grid container className="cartItem" display="row" xs={12}>
      <Grid item xs={2}>
        <img src={info.img}></img>
      </Grid>
      <Grid item xs={2}>
        <p>{info.name}</p>
      </Grid>
      <Grid item xs={3}>       
        <ItemCount></ItemCount>
      </Grid>
      <Grid container item xs={5} direction={"row"} justifyContent="end" alignSelf={"center"}>
      <p>{info.price}</p>
      <DeleteIcon></DeleteIcon>
      </Grid>
    </Grid>
  );
};

export default CartItem;
