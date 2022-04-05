import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonAdd from "../buttonAdd";
import "./styles.scss";

const CategoryCard = ({ name, img }) => {
  const link = `category/${name.toLowerCase()}`;
  console.log(`category/${name.toLowerCase()}`);
  return (
    <Grid container item lg={4} md={4} sm={6} xs={12} className="category" spacing={0} sx={{ }}>
      <Link to={`/category/${name.toLowerCase()}`}>
        <Grid item width={"content"}  style={{ marginTop: "2em", align:"center"}}  align={"center"}  >
   
    
          <h2 style={{ color: "black" }}>{name} </h2>
          <img src={img} className="img"></img>
          <ButtonAdd name={name}></ButtonAdd>
        </Grid>
    </Link>
        </Grid>
    
  );
};

export default CategoryCard;
