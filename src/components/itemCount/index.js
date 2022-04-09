import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./styles.scss";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import ButtonAdd from "../buttonAdd";

const ItemCount = ({
  stock,
  initial = 1,
  onAdd,
  counter,
  setCounter,
  display,
}) => {
  const handleAdd = () => {
    if (counter < stock) {
      setCounter((prev) => prev + 1);
    }
  };
  const handleSubstract = () => {
    if (counter > 1) {
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <Grid className="item">
      <Grid container row className="counter">
        <Grid
          container
          item
          //lg={6}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          min-width={"2"}
          className="buttonWraper"
        >
          <button onClick={handleSubstract}>-</button>
          <p>{counter}</p>
          <button onClick={handleAdd}>+</button>
        </Grid>
      </Grid>{" "}
      {display && (
        <Button  variant="contained" className="btn-add" onClick={onAdd}>
          Agregar al carrito
        </Button>
      )}
    </Grid>
  );
};

export default ItemCount;
