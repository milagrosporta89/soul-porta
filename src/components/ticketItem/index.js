import { Divider, Grid } from "@mui/material";
import React from "react";
import "./styles.scss";
import CartItem from "../CartItem";
/* const buyDetail=  */

const TicketItem = ({ buyId, buyDetail }) => {
  return (
    <>
      <Grid
        container
        item
        className="cartItem"
        display="row"
        xs={12}
        justifyContent="center"
        alignItems="center"
        style={{padding:"1em"}}
      >
        <Grid item xs={1}>
          <img src={buyDetail?.items?.img}></img>
        </Grid>
        <Grid container item xs={3} justifyContent={"center"}>
          <p>{buyDetail?.items?.name}</p>
        </Grid>
        <Grid container item xs={4} justifyContent={"center"}>
          <p>{buyDetail?.items?.description_short}</p>
        </Grid>
        <Grid
          container
          item
          xs={3}
          direction="row"
          justifyContent={"center"}
          alignSelf={"center"}
        >
          <p>{buyDetail?.items?.counter}</p>
        </Grid>

        <Grid
          container
          item
          xs={1}
          direction={"row"}
          justifyContent="center"
          alignSelf={"center"}
        >
          <p>$ {buyDetail?.items?.price * buyDetail?.items?.counter}</p>
        </Grid>
      </Grid>
      <Divider />
    </>
  );
};

export default TicketItem;
