import { Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";
import ButtonAdd from "../buttonAdd";
import "./styles.scss";
import Input from "../input";
import { useAuth } from "../../context/AuthContext";
import { ConstructionOutlined, ErrorSharp } from "@mui/icons-material";
import ButtonLoading from "../buttonLoading";

const Login = () => {
  const navigate = useNavigate()
  const { signUp, logIn, currentUser }=useAuth()


  const {handleInputChange, errors, setErrors, values} = useForm({
    email:"",
    password:""
  })

  const validation = () => {
    let temp = {};
    temp.email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
      values.email
    )
      ? ""
      : "Formato mail aaaa@bbb.ccc";
    temp.password = /^(?=.*\d).{8,}$/.test(values.password)
      ? ""
      : "La contraseña debe terner al menos 8 caracteres";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x == ""); //chequea si todos los valores del objetos son un string vacio
  };


  const handleSubmit = async (e) =>{
    e.preventDefault()
    if (validation()){      
      try{
        await logIn (values.email, values.password)
        navigate("/");
      }catch (error){
        let temp= {}
        console.log(error)
        if (error.code=== "auth/user-not-found"){
          temp.email="Correo electronico incorrecto"
          setErrors({...temp})
        }else if (error.code ==="auth/wrong-password"){
          temp.password ="Contraseña incorrecta"
          setErrors({...temp})
        }else if (error.code ==="too-many-requests"){
          temp.submit="too-many-requests" // hacer algo cuando haya habido demasiados intentos de ingresar
        }

      }
    }
  }


  return (
    <form onSubmit={handleSubmit}>
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
       
          <Input
            id="outlined-basic"
            name="email"
            variant="outlined"
            placeholder="Ingresa tu Email"
            fullWidth={true}         
            type="email"
            autoComplete="false"
            onChange={(e) => {handleInputChange(e)}}
            error={errors.email}
           
          />
        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>CONTRASEÑA</h4>
          <Input className="login-input"
            id="outlined-basic"
            name="password"
            variant="outlined"
            type={"password"}
            placeholder="Ingresa tu contraseña"
            fullWidth={true}
            onChange={(e) => {handleInputChange(e)}}
            size="normal"
            error={errors.password}
           
          />
          <Link to="/">
          <h5>¿Olvidaste tu Contraseña?</h5>
          </Link>
        </Grid>
        <Grid container item alignItems={"center"} justifyContent="center">
          <ButtonLoading  >INICIAR SESION</ButtonLoading>
          <Link to="/register"><h5>No tenes cuenta? Crear una </h5></Link>
        </Grid>
      </Grid>
    </Grid>
    </form>
  );
};

export default Login;
