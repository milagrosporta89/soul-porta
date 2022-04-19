import { ContactlessOutlined, Email } from '@mui/icons-material';
import { Divider, Grid, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import ButtonAdd from '../buttonAdd'
import "./styles.scss";
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Ticket from '../ticket';

const RegisterNoAuth = () => {
 
    const {cart, totalCart, emptyCart } = useContext( CartContext )
    const [orderId,setOrderId]=useState()
// estado para guardar los valores de los inputs 
    const [values, setValues] = useState({
      name:"",
      email:"",
      phone:""
    })
    
 // funcion para hacer que los valores de los inputs se agreguen a un estado
    const handleInputChange = (e) => {      
      setValues({
        ...values, 
        [e.target.name] : e.target.value
      })
    }
    
//aarmado del arreglo para mandar a firebase

    const handleSubmit = (e)=>{
        e.preventDefault ()
        const order = {
          items: cart,
          total: totalCart(),
          buyer: {...values},
          date: Timestamp.fromDate(new Date()) /// timestamp es una clase de firebase que permite trabajar con mas facilidad las fechas
      }

      const ordersRef = collection(db,"orders")
      addDoc(ordersRef,order)
      .then((doc) => setOrderId(doc.id))
      emptyCart()

 
    }

    if(orderId){

      return  <Ticket buyId={orderId}></Ticket>
      
      {/* <h4>orden numero {orderId}</h4> */}
     }
  
  return (
      <form onSubmit={handleSubmit}>

 
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
            <Grid container item direction="column" justifyContent="start" alignItems="center" style={{marighBottom:"15px"}}>
                <h4>Completa tus datos para seguir </h4>

             <Divider/>
            </Grid>
          <h4>NOMBRE </h4>   
          <TextField
            id="outlined-basic"
            name="name"
            variant="outlined"
            placeholder="Ingresa tu Nombre y Apellido"
            fullWidth={true}
            type="text"
            onChange={(e)=>handleInputChange(e)}
        
           
          />
        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>EMAIL</h4>
          <TextField className="login-input"
            id="outlined-basic"
            name="email"
            variant="outlined"
            type={"email"}
            placeholder="Ingresa tu Email"
            fullWidth={true}      
            size="normal"
            onChange={(e)=>handleInputChange(e)}
           
          />

        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>TELEFONO</h4>
          <TextField className="login-input"
            id="outlined-basic"
            name="phone"
            variant="outlined"
            type={"number"}
            placeholder="Ingresa tu contraseña"
            fullWidth= {true}        
            size="normal"
            onChange={(e)=>handleInputChange(e)}
           
          />

        </Grid>
     
        <Grid container item alignItems={"center"} justifyContent="center">
          <ButtonAdd name="FINALIZAR COMPRA" className="login-btn" type="submit"></ButtonAdd>
     
        </Grid>
      </Grid>
    </Grid>
          </form>
  )
}

export default RegisterNoAuth