import { Divider, Grid } from "@mui/material";
import { collection, documentId, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import "./styles.scss";
import { useNavigate } from 'react-router-dom';

const CartResume = ({ total , functionClick}) => {

  const {cart, totalCart, emptyCart } = useContext( CartContext )
  const navigate = useNavigate()
  

  const handleBuy = async (e) => {
    e.preventDefault()
    const outOfStock = []

    const productsRef = collection(db, "products");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((e) => e.id)
      )
    );
    const products = await getDocs(q);
    products.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);
      if (doc.data().stock < itemInCart.counter) {
        outOfStock.push(doc.data());
      }
    });
    if (outOfStock.length===0){
      navigate("/checkout")
    }else{
      navigate("/")//hacer un alerta que diga que item no esta en stock 
    }
    //console.log(products.docs.map(doc=>doc.data()))//para poder leer el objeto que viene de la peticion//

  };
  

  return (
    <Grid
      container
      xs={12}
      justifyContent="flex-start"
      direction="column"
      marginLeft="2em"
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
            <p>$1500</p>
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
      >
       

          <button onClick={(e) => handleBuy(e)}>
            <h2>FINALIZAR COMPRA </h2>
          </button>        
  
      </Grid>
    </Grid>
  );
};

export default CartResume;
