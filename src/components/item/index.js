import React from "react";
import CardContent from "@mui/material/CardContent";
import "./styles.scss";
import { Grid, CardMedia, Button } from "@mui/material";
import logo from "../../img/logo-soul.JPG";
import ButtonAdd from "../buttonAdd";
import { Link } from "react-router-dom";


const Item = ({ name, description_short, price, img, id}) => {

  return (
    <>
      <Grid container item lg={3} md={4} sm={6} xs={12} className="card" spacing={0} alignItems={"center"}   direction="column ">
        <Grid item className="card-shadow" >

          <Grid container item >
          <Link to={`/item/${id}`} > <img src= {img}></img></Link>
         

          </Grid>
          <div>{name}</div>
          <div>{description_short}</div>
          <div>$ {price}</div>

          <Link to={`/item/${id}`} ><ButtonAdd name="AGREGAR AL CARRITO"></ButtonAdd></Link>

        </Grid>
 
      </Grid>
    </>
  );
};

export default Item;
