import { Divider, Grid, IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount";
import "./styles.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { width } from "@mui/system";
import { Link } from "react-router-dom";

const CartItem = ({name, img, description_short, price, id}) => {
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
        <img src={info.img}></img>
      </Grid>
      <Grid item xs={2}>
        <p>{info.name}</p>
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
        <ItemCount counter={2}></ItemCount>
      </Grid>
      <Grid
       container
       item
       xs={2}
       direction="row"
       justifyContent={"center"}
       width={"100%"}
       alignSelf={"center"}>
        <Link to="/">Ver detalle</Link>
      </Grid>
      <Grid
        container
        item
        xs={2}
        direction={"row"}
        justifyContent="flex-end"
        alignSelf={"center"}
      >
        <p>{info.price}</p>
        <IconButton>
          <DeleteIcon></DeleteIcon>
        </IconButton>
      </Grid>
    </Grid>
      <Divider/>
      </>
  );
};

export default CartItem;
