import { Container, Grid } from '@mui/material'
import React, { useState } from 'react'
import ButtonAdd from '../buttonAdd';
import "./styles.scss";
import ItemCount from "../itemCount"
import { Link } from 'react-router-dom';

const ItemDetail = ( {name, description_short, description_long, price, img, stock}) => {

    const [counter, setCounter] = useState(1);

    const addToCart = () =>{
        const itemToAdd = {
            name: name,
            description_short: description_short,
            price: price,
            img : img,
            counter: counter
        }
        console.log(itemToAdd)

    }

console.log (counter)
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
                 <ItemCount stock={stock}
                             counter={counter}               
                             setCounter={setCounter} 
                             onAdd = {addToCart}
                            />
                <Link to="/cart"><button>Terminar mi compra </button></Link>
                  </Grid>
                  
                    </Grid>
              </Grid>
      
      
          </Grid>
      </Container>
        )
}

export default ItemDetail