import { Container, Divider, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem";
import CartResume from "../CartResume";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import Ticket from "../ticket";
import {
  writeBatch,
  collection,
  addDoc,
  getDocs,
  where,
  query,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import ModalNoStock from "../modalNoStock";

const Cart = () => {
  const navigate= useNavigate()
  const { cart, cartQuantity, totalCart } = useContext(CartContext);
  const [noStock, setNoStock] =useState([])
  const [modalOpen, setModalOpen] =useState(false)

  const handleBuy = async (e) => {
    e.preventDefault();
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
    const outOfStock = [];
   
    products.docs.forEach((doc) => {
      const itemInCart = cart.find((item) => item.id === doc.id);

      if (doc.data().stock < itemInCart.counter) {
        outOfStock.push(doc.data());
        const data=doc.data()

     
      }
    
    });
    setNoStock(outOfStock)
    if (outOfStock != 0){
      setModalOpen(true)

    } else{
      navigate("/checkout")    
    }    
    
    console.log (noStock)
    console.log ("no Stock de cart")
    console.log(products.docs.map(doc=>doc.data()))//para poder leer el objeto que viene de la peticion//
    
  };
  
  const handleClose = ()=> {
    setModalOpen(false)
  }
  /*   if (cart.length === 0) {
    //early return por si el carrito esta vacio
    return <Navigate to="/"></Navigate>;
  } */


  return (
    <Container container item alignItems="flex-start" className="cart-list">
      { cartQuantity() !=0 ? (
      <Grid marginTop={"2em"}>
        <h2>Tu Carrito</h2>
      </Grid>


      ) : <br></br>

      }

      <Grid container item alignItems={"flex-start"}>
        <Grid container item={true} xs={8} direction={"row"}>
          {cartQuantity() > 0 ? (
            <Grid container item direction="row" alignItems={"flex-start"}>
              <Grid
                container
                item
                justifyContent="space-around"
                xs={12}
                height={"2.5em"}
              >
                <Grid container item={true} xs={4}>
                  <h4>Producto</h4>
                </Grid>
                <Grid container item={true} xs={5}>
                  <h4>Cantidad</h4>
                </Grid>
                <Grid container item={true} xs={1}>
                  <h4>Precio</h4>
                </Grid>
              </Grid>
              <Divider orientation="horizontal" style={{ width: "100%" }} />
              <Grid
                container
                item
                justifyContent="center"
                alignItems="flex-start"
                xs={12}
                marginTop={"1.5em"}
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
          ) : (
            <Grid
              container
              item
              direction="row"
              justifyContent="center"
              alignItems="center"
              className="emptyCart"
           
            >
       
                <h2>Tu Carrito esta vacio</h2>
        
            </Grid>
          )}
        </Grid>

        <Grid container item={true} xs={4} direction={"row"}>
          <CartResume
            total={totalCart()}
            functionClick={handleBuy}
          ></CartResume>
        </Grid>
      </Grid>
     <ModalNoStock open={modalOpen} close={handleClose} outOfStock={noStock}></ModalNoStock>
    </Container>
  );
};

export default Cart;
