import { Container, Grid } from '@mui/material'
import React from 'react'
import ButtonAdd from '../buttonAdd';
import "./styles.scss";
import ItemCount from "../itemCount"

const ItemDetail = ( {name, description_short, description_long, price, img, stock}) => {
 

  return (
      <Container alignItems={"center"}>          
          <Grid   container
                     item
                  direction={'row'}
                  className="item-detail"
                  margin={"2em"}
           
                  >
              <Grid item alignContent={"center"} style={{marginRight:"5em", padding:"1em"}}>
                  <img src= {img}></img>
              </Grid>
              <Grid container style={{width:"15em"}} >
                  <Grid  item >
 
                  <h2>{name}</h2>    
                  <h1>{price}</h1>
                  <h3>{description_short} </h3>
                  <h3>{description_long} </h3>
                  <p>stock disponible {stock}</p>
                  <Grid>
                  <p>Cantidad</p>
                 <ItemCount></ItemCount>
                  <ButtonAdd name= {"Agregar al carrito"}/>                  
                  </Grid>
                    </Grid>
              </Grid>
      
      
          </Grid>
      </Container>
        )
}

export default ItemDetail