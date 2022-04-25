import { Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import "./styles.scss";
import CartItem from "../CartItem";
import TicketItem from "../ticketItem";
import ButtonAdd from "../buttonAdd";
import { Link } from "react-router-dom";

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
          <Grid
            container
            item={true}
            xs={12}
            style={{ paddingLeft: "2em", paddingRight: "1em" }}
          >
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
            <TicketItem buyDetail={buyDetail}></TicketItem>
            <TicketItem buyDetail={buyDetail}></TicketItem>
            <TicketItem buyDetail={buyDetail}></TicketItem>
            <TicketItem buyDetail={buyDetail}></TicketItem>
            <Grid container item direction="row" justifyContent={"space-evenly"} xs={4} style={{paddingLeft:""}}>
              <p>Envio</p>
              <p>Retiro por Tienda</p>

            </Grid>
          </Grid>
          <Divider />
          <Grid container item direction="row">
            <Grid
              container
              item
              xs={11}
              justifyContent={"flex-end"}
              style={{ paddingRight: "10%" }}
            >
              <p>TOTAL</p>
            </Grid>
            <p>{buyDetail?.total}</p>
          </Grid>
        </Grid>
      <Grid container item alignItems="center" direction ="column" marginTop={"2em"}>
        <h2>¡Muchas gracias por tu compra! </h2>
        <Link to="/">
        <ButtonAdd name="SEGUIR COMPRANDO"></ButtonAdd>
        
        </Link>
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Ticket;
