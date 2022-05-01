import { Grid } from "@mui/material";
import React from "react";
import "./styles.scss";

const Politica = () => {
  return (
    <Grid className="politica">
      <div>
        <h4>CAMBIOS Y DEVOLUCIONES</h4>
        <p>
          Si no estás conforme con nuestro producto, ¡lo vamos a lamentar mucho!
          Y vamos a acompañarte a que puedas realizar un cambio siguiendo
          algunas de las siguientes formas:{" "}
        </p>
        <p>
        • En nuestra tienda física podrás cambiarlo por cualquier producto que
        este en stock.
        </p>

        <p>
        • Desde tu domicilio (el mismo corre por cuenta del
        cliente).
        </p> 
        <br></br>
        <p>
        
         Escribinos a soul@gmail.com o por instagram. Las
        devoluciones sólo pueden ser realizadas durante los 15 días siguientes a
        la compra, siempre y cuando el producto esté en las mismas condiciones
        que fue entregado. Soul NO se responsabiliza por daños o roturas ocasionadas
        por terceros. Todos nuestros productos son revisados antes de enviarlos,
        pero si recibís algo en mal estado, por favor comunicate con nostras a
        soul@gmail.com , así podemos solucionarlo.
        
        
        </p>       
      </div>
    </Grid>
  );
};

export default Politica;
