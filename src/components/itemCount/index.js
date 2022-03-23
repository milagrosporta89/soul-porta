import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import "./styles.scss";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

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
    <Grid container item lg={2} className="card">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Collar Cuarzo
        </Typography>
      </CardContent>

      <Grid
        container
        item
        lg={12}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        className="buttonWraper"
      >
        <button onClick={handleSubstract}>-</button>
        <p>{counter}</p>
        <button onClick={handleAdd}>+</button>
      </Grid>
    </Grid>
  );
};

export default ItemCount;
