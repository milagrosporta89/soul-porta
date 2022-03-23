import React from "react";
import CardContent from "@mui/material/CardContent";
import "./styles.scss";
import { Grid, CardMedia, Button } from "@mui/material";
import logo from "../../img/logo-soul.JPG";
import ButtonAdd from "../buttonAdd";


const Item = ({ name, description, price, img }) => {
/*   const products = {
    name: "CUARZO",
    description: "Amuleto Protector",
    price: "$2000",
    img: "../../img/cuarzo.jpg",
  };
 */
  return (
    <>
      <Grid container item lg={3} className="card" spacing={0} sx={{  width:1/2}}>
        <CardContent sx={{ p:0, '&:last-child': { pb: 0 } }}>
          <CardMedia
            //image={require( `${products.img}`)}
            style={{ height: "17em", padding:0, width: "17em", margin: 0 }}
          />
          <img src={img}></img> 
          <div>{name}</div>
          <div>{description}</div>
          <div>{price}</div>

          <ButtonAdd name="AGREGAR AL CARRITO"></ButtonAdd>
        </CardContent>
      </Grid>
    </>
  );
};

export default Item;
