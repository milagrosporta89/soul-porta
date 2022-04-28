import { Grid, TextField } from '@mui/material'
import React from 'react'
import ButtonAdd from '../buttonAdd'
import "./styles.scss";
import { useAuth } from '../../context/AuthContext';
import Input from "../input";
import useForm from "../../hooks/useForm";
import ButtonLoading from '../buttonLoading';

const Register = () => {
  const { signUp, logIn, currentUser }=useAuth()

  const { values, handleInputChange, errors, setErrors } = useForm({
    email: "",
    password: "",
    repPassword:""    
  });

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
      temp.repPassword = (values.password === values.repPassword)
      ? ""
      : "Las contraseñas no coinciden"

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x == ""); //chequea si todos los valores del objetos son un string vacio
  };
console.log (errors)
console.log(values)
  const handleSubmit = async (e) =>{
    e.preventDefault()
    if (validation()){
      try{
        await signUp (values.email, values.password)    
      }catch (error){
        let temp={}
        if (error.code ==="auth/email-already-in-use"){
          temp.email="Ya hay un usuario registrado con ese Email"
          setErrors({...temp})
        }
        console.log(error.code)
  
      }
    }

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
          <h4>REGISTRATE CON TU EMAIL </h4>
   
          <Input
            id="outlined-basic"
            name="email"
            variant="outlined"
            placeholder="Ingresa tu Email"
            fullWidth={true}
            type="email"
            onChange={(e) => {handleInputChange(e)}}
            error={errors.email}
           
          />
        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>ELIJE TU CONTRASEÑA</h4>
          <Input className="login-input"
            id="outlined-basic"
            name="password"
            variant="outlined"
            type={"password"}
            placeholder="Ingresa tu contraseña"
            fullWidth={true}
            onChange={(e) => {handleInputChange(e)}}
            error={errors.password}
            size="normal"
           
          />

        </Grid>
        <Grid container item  style={{marginTop:"10px"}}>
          <h4>CONFIRMA TU CONTRASEÑA</h4>
          <Input className="login-input"
            id="outlined-basic"
            name="repPassword"
            variant="outlined"
            type={"password"}
            placeholder="Ingresa tu contraseña"
            fullWidth={true}
            onChange={(e) => {handleInputChange(e)}}
            error={errors.repPassword}
          
            size="normal"
           
          />

        </Grid>
        <Grid container item alignItems={"center"} justifyContent="center">
          <ButtonLoading  > REGISTRARME </ButtonLoading>
     
        </Grid>
      </Grid>
    </Grid>
    </form>
  )
}

export default Register