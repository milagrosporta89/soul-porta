import React from "react";
import CardContent from "@mui/material/CardContent";
import "./styles.scss";
import { Grid, CardMedia, Button } from "@mui/material";
import logo from "../../img/logo-soul.JPG";
import ButtonAdd from "../buttonAdd";
import { Link } from "react-router-dom";


const Item = ({ name, description_short, price, img, id}) => {
/*   const products = {
    name: "CUARZO",
    description: "Amuleto Protector",
    price: "$2000",
    img: "../../img/cuarzo.jpg",
  };
 */
  return (
    <>
      <Grid container item lg={3} md={4} sm={6} xs={12} className="card" spacing={0} sx={{ }}>
        <Grid item width={"content"} style={{marginTop:"2em"}}>

          <img src= {img}></img> 
          <div>{name}</div>
          <div>{description_short}</div>
          <div>{price}</div>

          <Link to={`item/${id}`} ><ButtonAdd name="AGREGAR AL CARRITO"></ButtonAdd></Link>

        </Grid>
     {/*    <CardContent sx={{ p:0, '&:last-child': { pb: 0 } }}>
     
        </CardContent> */}
      </Grid>
    </>
  );
};

export default Item;
