import { Grid, TextField } from '@mui/material'
import React from 'react'
import ButtonAdd from '../buttonAdd'
import "./styles.scss";

const Register = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid
        container
        className="register"
        justifyContent="space-evenly"
        alignItems="center"
        direction="column"
        width={"350px"}
        height={"45vh"}
        >
        <Grid container item>
          <h4>REGISTRATE CON TU EMAIL </h4>
   
          <TextField
            id="outlined-basic"
            name="email"
            variant="outlined"
            placeholder="Ingresa tu Email"
            fullWidth={true}
            type="email"
           
          />
        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>ELIJE TU CONTRASEÑA</h4>
          <TextField className="login-input"
            id="outlined-basic"
            name="password"
            variant="outlined"
            type={"password"}
            placeholder="Ingresa tu contraseña"
            fullWidth={true}
          
            size="normal"
           
          />

        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>CONFIRMA TU CONTRASEÑA</h4>
          <TextField className="login-input"
            id="outlined-basic"
            name="password"
            variant="outlined"
            type={"password"}
            placeholder="Ingresa tu contraseña"
            fullWidth={true}
          
            size="normal"
           
          />

        </Grid>
        <Grid container item alignItems={"center"} justifyContent="center">
          <ButtonAdd name="CREAR CUENTA" className="login-btn"></ButtonAdd>
     
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Register