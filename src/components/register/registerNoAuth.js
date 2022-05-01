
import { Divider, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

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
  const [btnLoad, setBtnLoad] = useState(false);
  const [buy, setBuy] = useState({

  });
  // estado para guardar los valores de los inputs
  const { values, handleInputChange, errors, setErrors } = useForm({
    name: "",
    email: "",
    phone: "",
  });

  const validation = () => {
    let temp = {};
    temp.name = values.name ? "" : "Complete el campo";
    temp.email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
      values.email
    )
      ? ""
      : "Formato mail aaaa@bbb.ccc";
    temp.phone = /^[0-9]{10,12}$/i.test(values.phone)
      ? ""
      : "El numero debe tener entre 10 y 12 caracteres";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x == ""); //chequea si todos los valores del objetos son un string vacio
  };

  //armado del arreglo para mandar a firebase

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validation()) {
      setBtnLoad(true);

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
        batch.update(doc.ref, {
          stock: doc.data().stock - itemToUpdate.counter,
        });
      });

      addDoc(ordersRef, order).then((doc) => {
        emptyCart();
        setBuy(order);
        setOrderId(doc.id);

        batch.commit();
      });
    }
  };

  if (orderId) {
    console.log(orderId);
    console.log(buy)
    return <Ticket buyId={orderId} buyDetail={buy}></Ticket>;
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
          height={"28em"}
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
            <ButtonLoading isLoading={btnLoad}>FINALIZAR COMPRA </ButtonLoading>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default RegisterNoAuth;
