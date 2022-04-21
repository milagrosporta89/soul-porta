import { Email, TempleBuddhist } from "@mui/icons-material";
import { Divider, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ButtonAdd from "../buttonAdd";
import "./styles.scss";
import {
  collection,
  addDoc,
  Timestamp,
  where,
  writeBatch,
  query,
  getDocs,
  documentId,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import Ticket from "../ticket";
import ButtonLoading from "../buttonLoading";
import useForm from "../../hooks/useForm";
import Input from "../input";

const RegisterNoAuth = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState();
  const [ btnLoad, setBtnLoad ] = useState (false)
    // estado para guardar los valores de los inputs
  const { values, handleInputChange, errors, setErrors} = useForm({
    name:"",
    email:"",
    phone:""

  })

  const validation =() => {
    let temp={}
    temp.name= values.name ? "": "Complete el campo"
    temp.email = ( /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(values.email) ? "" : "Formato mail aaaa@bbb.ccc"
    temp.phone = ( /^[0-9]{10,12}$/i).test(values.phone) ? "" : "El numero debe tener entre 10 y 12 caracteres"
    
    setErrors({...temp})
    return Object.values(temp).every(x => x == "")
  }

  //aarmado del arreglo para mandar a firebase

  const handleSubmit = async (e) => {

     if (!validation()){
       console.log(errors)
     }
    setBtnLoad(true)
    e.preventDefault()
   /*  e.preventDefault();
    const order = {
      items: cart,
      total: totalCart(),
      buyer: { ...values },
      date: Timestamp.fromDate(new Date()), /// timestamp es una clase de firebase que permite trabajar con mas facilidad las fechas
    };
    const batch = writeBatch(db);
    const ordersRef = collection(db, "orders");
    const productsRef = collection(db, "products");
    const q = query(
      productsRef,
      where(
        documentId(),
        "in",
        cart.map((e) => e.id)
      )
    );
    const products = await getDocs(q);
    products.docs.forEach((doc) => {
      const itemToUpdate = cart.find((e) => e.id === doc.id);
      batch.update(doc.ref, { stock: doc.data().stock - itemToUpdate.counter });
    });

    addDoc(ordersRef, order).then((doc) => {
      setOrderId(doc.id);
      emptyCart();
      batch.commit();
      console.log("todo actualiizdo");
    }); */
  };

  if (orderId) {
    return <Ticket buyId={orderId}></Ticket>;
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
          width={"360px"}
          height={"50vh"}
        >
          <Grid container item>
            <Grid
              container
              item
              direction="column"
              justifyContent="start"
              alignItems="center"
              style={{ marighBottom: "15px" }}
            >
              <h4>Completa tus datos para seguir </h4>

              <Divider />
            </Grid>
            <h4>NOMBRE </h4>
            <Input
              id="outlined-basic"
              name="name"
              variant="outlined"
              placeholder="Ingresa tu Nombre y Apellido"
              fullWidth={true}
              type="text"
              onChange={(e) => handleInputChange(e)}
              error={errors.name}
            />
          </Grid>
          <Grid container item style={{ marginTop: "7px" }}>
            <h4>EMAIL</h4>
            <Input
              className="login-input"
              id="outlined-basic"
              name="email"
              variant="outlined"
              type={"email"}
              placeholder="Ingresa tu Email"
              fullWidth={true}
              size="normal"
              error={errors.email}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid container item style={{ marginTop: "7px" }}>
            <h4>TELEFONO</h4>
            <Input
              className="login-input"
              id="outlined-basic"
              name="phone"
              variant="outlined"
              type={"number"}
              placeholder="Ingresa tu contraseña"
              fullWidth={true}
              size="normal"
              error={errors.phone}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>

          <Grid container item alignItems={"center"} justifyContent="center">
            <ButtonAdd
              name="FINALIZAR COMPRA"z
              className="login-btn"
              type="submit"
            ></ButtonAdd>  
            
            {/* <ButtonLoading isLoading ={btnLoad}>FINALIZAR COMPRA </ButtonLoading> */}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterNoAuth;
