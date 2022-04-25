import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import "./styles.scss";
import CartItem from "../CartItem";
import TicketItem from "../ticketItem";

const Ticket = ({ buyId, buyDetail }) => {
  return (
    <Grid container item alignItems={"center"} justifyContent={"center"}>
      <Grid className="ticket">
        <h4> Estimad@ {buyDetail?.buyer?.name}, </h4>
        <br></br>
        <h4>
          {" "}
          Acabamos de enviarte un mail a {buyDetail?.buyer?.email} con el
          detalle de la compra{" "}
        </h4>
        <br></br>
        <h4>Podes rastrear tu orden con el siguiente numero: {buyId}</h4>
        <br></br>
        <Grid>
          <Grid container item={true} xs={12} style={{ paddingLeft: "2em", paddingRight:"1em"}}>
            <Grid container item={true} xs={8}>
              <h4>Producto</h4>
            </Grid>
            <Grid
              container
              item={true}
              xs={3}
              direction={"row"}
              justifyContent="center"
            >
              <h4>Cantidad</h4>
            </Grid>
            <Grid item={true} xs={1}>
              <h4>Subtotal</h4>
            </Grid>
          </Grid>
          <Divider />
          <Grid container item xs={12} style={{}}>
            <TicketItem buyDetail={buyDetail}></TicketItem>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Ticket;
