import { Grid } from "@mui/material";
import React from "react";
import "./styles.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from '@mui/icons-material/Instagram';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const FooterLower = () => {
  return (
    <Grid container className="lower-footer" justifyContent="center" alignItems="center">
      <p>COPYRIGHT SOUL - 2022. TODOS LOS DERECHOS RESERVADOS</p>
    
    </Grid>
  );
};

export default FooterLower;
