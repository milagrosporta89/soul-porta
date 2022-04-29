import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { Grid } from "@mui/material";
import Input from "../input";
import ButtonLoading from "../buttonLoading";
import { useAuth } from "../../context/AuthContext";

const ModalResetPass = ({ open, close, outOfStock }) => {
  const { resetPassword } = useAuth();
  const [openModal, setOpenModal] = useState(open);
  const [values, setValues] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(false);
  const [errors, setErrors] =useState ()

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const validation = () => {
    let temp = {};

    temp.email=values === undefined && "Ingresa tu email" 
    
    temp.email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
      values?.email
    )
      ? ""
      : "Formato mail aaaa@bbb.ccc";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x == ""); //chequea si todos los valores del objetos son un string vacio
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
    if (validation()){
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
          close();
        }, 2000);
        resetPassword(values.email);
        setResponse(true);
        setValues({})
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {!response ? (
          <>
            <DialogTitle id="alert-dialog-title">
              {"¿Deseas reestablecer tu contraseña? "}
            </DialogTitle>
            <DialogContent>
              <form>
                <Grid>
                  <p>
                    Ingresa tu email para que podamos enviarte una nueva
                    contraseña
                  </p>
                </Grid>
                <Input
                  name="email"
                  type="email"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  fullWidth={true}
                  error={errors?.email}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <ButtonLoading
                onClick={(e) => handleSubmit(e)}
                isLoading={isLoading}
              >
                Aceptar
              </ButtonLoading>
            </DialogActions>{" "}
          </>
        ) : (
          <>
            <DialogTitle id="alert-dialog-title">
              {"Acabamos de enviarte un correo "}
            </DialogTitle>
            <DialogContent>
              <Grid>
                <p>
                  Revisa tu casilla de mail {values.email} y sigue los pasos
                  para reestablecer tu contraseña
                </p>
              </Grid>
            </DialogContent>
            <DialogActions>
              <ButtonLoading
                onClick={close}

              >
                Cerrar
              </ButtonLoading>
            </DialogActions>{" "}
          </>
        )}
      </Dialog>
    </div>
  );
};

export default ModalResetPass;
