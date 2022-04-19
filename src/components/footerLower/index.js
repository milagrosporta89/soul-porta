import { Grid } from "@mui/material";
import React from "react";
import "./styles.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from '@mui/icons-material/Instagram';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const FooterLower = () => {
  return (
    <Grid container className="footer" >
      <Grid container item direction="row" xs={4} alignItems="center" justifyContent="space-around">
        <WhatsAppIcon className="wappIcon" />
        <Grid>
          <h2>Escribinos</h2>
          <h4>Te damos asesoramiento personalizado</h4>
        </Grid>
      </Grid>
      <Grid container item direction="row" xs={4} alignItems="center" justifyContent="space-around" className="footer-center">
        <CreditCardIcon className="wappIcon" />
        <Grid>
          <h2>Cuotas sin interés</h2>
          <h4>Elegi el plan que mas te guste</h4>
        </Grid>
      </Grid>
      <Grid container item direction="row" xs={4} alignItems="center" justifyContent="space-around">
        <InstagramIcon className="wappIcon" />
        <Grid>
        <h2>Seguinos en Instagram</h2>
          <h4>Muchos tips y las ultimas novedades</h4>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FooterLower;
