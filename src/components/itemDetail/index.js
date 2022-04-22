import { Button, Container, Divider, Grid } from "@mui/material";
import React, { useContext, useState } from "react";
import ButtonAdd from "../buttonAdd";
import "./styles.scss";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { height } from "@mui/system";

const ItemDetail = ({
  name,
  description_short,
  description_long,
  price,
  img,
  stock,
  id,
}) => {
  const [counter, setCounter] = useState(1);
  const { cart, itemAdd, isInCart } = useContext(CartContext);

  const addToCart = () => {
    const itemToAdd = {
      name: name,
      description_short: description_short,
      price: price,
      img: img,
      counter: counter,
      stock: stock,
      id: id,
    };
    itemAdd(itemToAdd);
  };

  return (
    
    <Container>
      <Grid container item className="item-detail" margin={"2em"}>
        <Grid
          item
          alignContent={"center"}
          style={{ marginRight: "3em", padding: "1em" }}
        >
          <img src={img}></img>
        </Grid>
        <Grid
          container     
          direction="column"
          justifyContent="space-evenly"
          alignItems="flex-end"
          style={{ width: "18vw"}}
        >
          <Grid item justifyContent="space-evenly"> 
            <h2>{name}</h2>
            <Divider />
            <h1>$ {price}</h1>
            <h2>{description_short} </h2>
            <h3>{description_long} </h3>
     
            </Grid>
            <Grid  container  item direction="column" justifyContent={"center"} alignItems={"strech"}>

            <Grid item justifyContent={"flex-end"} alignItems={"flex-end"}>
              <h2>Cantidad</h2>
              {
                (stock==0) 
                ? <p  className="out-of-stock">¡Sin Stock! </p> 
                : <p> {stock} unidades disponibles </p>
              }

           
              {!isInCart(id) ? (
                <ItemCount
                  stock={stock}
                  counter={counter}
                  setCounter={setCounter}
                  onAdd={addToCart}
                  display={true}
                />
              ) : (
                <Link to="/cart">
                    <Button variant="contained" className="btn-add" >Terminar mi compra</Button>
                </Link>
              )}
            </Grid>

            </Grid>
        
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetail;
