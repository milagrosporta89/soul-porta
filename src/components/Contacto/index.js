import { Grid } from '@mui/material'
import React from 'react'
import ButtonLoading from '../buttonLoading';
import Input from '../input'
import "./styles.scss";

const Contacto = () => {
  return (
    <Grid container justifyContent="center">


    <Grid container className="contacto" > 
      <Grid container item direction="column" >
      <h4>NOMBRE</h4>
      <Input
                  variant="outlined"/>    
      </Grid>
      <Grid container item direction="column" >
      <h4>EMAIL</h4>
      <Input
      variant="outlined"
      
      type="email"/>    
      </Grid>
 
      <Grid container item direction="column" >
      <h4>TELEFONO</h4>
      <Input
      variant="outlined"
      type="phone"/>    
      </Grid>
      <Grid container item direction="column" >
      <h4>MENSAJE </h4>
      <Input 
      multiline={true}
      minRows="8"
      variant="outlined"
      type="text"/>    
      </Grid>
      <Grid container  >
        <ButtonLoading>Enviar Mensaje </ButtonLoading>
      </Grid>
      </Grid>
 
    </Grid>
  )
}

export default Contacto