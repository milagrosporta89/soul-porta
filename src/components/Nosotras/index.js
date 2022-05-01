import { Grid } from "@mui/material";
import React from "react";
import "./styles.scss";

const Nosotras = () => {
  return (
    <Grid container direction="row" className="nosotras" justifyContent="center">
      <Grid item md={6}>
        <p>Hola!</p>
        <p>
          Soy Consuelo. Soy la emprendedora atrás de Soul. Me encanta indagar en
          la energía y como esta nos impacta en el dia a dia.
        </p>
        <p>
          En las piedras encontré una forma muy especial de cuidarme a mi misma
          y ahora con Soul, de poder cuidar a los demás!. La energía esta en
          todos lados y nada me pone mas contenta que ayudar a que juegue a
          nuestro favor!
        </p>
        <p>
          Si tenes consultas sobre como cuidar las piedras, o cual se adapta
          mejor a lo que te esta sucediendo en tu vida, no dudes en escribirme
          por Instagram!
        </p>
      </Grid>
      <Grid item  md={6} justifyContent="center">
        <img src="/nosotros.JPG"></img>
      </Grid>
    </Grid>
  );
};

export default Nosotras;
