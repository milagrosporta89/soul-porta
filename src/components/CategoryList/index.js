import { Grid } from "@mui/material";
import React from "react";
import ButtonAdd from "../buttonAdd";
import CategoryCard from "../CategoryCard";
import { Link, useParams } from "react-router-dom";


const CategoryList = () => {
  return (
    <Grid     container item sx={{  }}>

      <CategoryCard name={"PULSERAS"} img={"/img/agata coralina.jpg"}></CategoryCard>
      <CategoryCard name={"COLLARES"} img={"/img/chapa de agatha.jpg"}></CategoryCard>
      <CategoryCard name={"PIEDRAS"} img={"/img/cuarzo azul.jpg"}></CategoryCard>
      
 

    </Grid>
      
  

   

  
  );
};

export default CategoryList;
