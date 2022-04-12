import { Divider, Grid, IconButton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../itemCount";
import "./styles.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import { width } from "@mui/system";
import { Link } from "react-router-dom";

const CartItem = ({name, img, price, id,counter, stock }) => {
  const { cart, cartQuantity, removeItem, modifyCart } = useContext(CartContext);
  const [provCart, setProvCart] = useState(cart);
  const [count,setCount] = useState(Number(counter))

  useEffect(() => {
    setProvCart(cart);
  }, []);
  
  useEffect(() => {
    modifyCart(id,count)
    console.log (cart)
  
 

  }, [count]);

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
};

export default CartItem;
