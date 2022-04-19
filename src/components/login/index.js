import { Grid, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ButtonAdd from "../buttonAdd";
import "./styles.scss";

const Login = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        container
        className="login"
        justifyContent="center"
        alignItems="center"
        direction="column"
        width={"350px"}
        height={"45vh"}
      >
        <Grid container item>
          <h4>EMAIL</h4>
          <TextField
            id="outlined-basic"
            name="email"
            variant="outlined"
            placeholder="Ingresa tu Email"
            fullWidth={true}         
            type="email"
            autoComplete="false"
           
          />
        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>CONTRASEÑA</h4>
          <TextField className="login-input"
            id="outlined-basic"
            name="password"
            variant="outlined"
            type={"password"}
            placeholder="Ingresa tu contraseña"
            fullWidth={true}
          
            size="normal"
           
          />
          <p>¿Olvidaste tu Contraseña?</p>
        </Grid>
        <Grid container item alignItems={"center"} justifyContent="center">
          <ButtonAdd name="INICIAR SESION" className="login-btn"></ButtonAdd>
          <Link to="/register"><p>No tenes cuenta? Crear una </p></Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
