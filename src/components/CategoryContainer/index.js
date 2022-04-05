import { Grid } from "@mui/material";
import React from "react";
import ButtonAdd from "../buttonAdd";
import CategoryCard from "../CategoryCard";
import { Link, useParams } from "react-router-dom";
import Categorias from "../Categorias";

const CategoryContainer = () => {
  return (
    <Grid container item>
      
  
      
      <CategoryCard name={"PULSERAS"}></CategoryCard>
      <CategoryCard name={"COLLARES"}></CategoryCard>
      <CategoryCard name={"PIEDRAS"}></CategoryCard>
      
   
      </Grid>
  
  );
};

export default CategoryContainer;
