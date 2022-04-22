import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import "./styles.scss";

const ItemCount = ({
  stock,
  onAdd,
  counter,
  setCounter,
  display,
}) => {
 
  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const handleSubstract = () => {
    if (counter > 1) {
      setCounter(counter -1);
    }
  };

  return (
    <Grid className="item">
      <Grid container row className="counter">
        <Grid
          container
          item
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          min-width={"2"}
          className="buttonWraper"
        >
          <button onClick={handleSubstract}>-</button>
          <p>{(stock===0) ? 0 : counter}</p>
          <button onClick={handleAdd}>+</button>
        </Grid>
      </Grid>
      {display && (
        <Button  variant="contained" className="btn-add" onClick={onAdd}>
          Agregar al carrito
        </Button>
      )}
    </Grid>
  );
};

export default ItemCount;
