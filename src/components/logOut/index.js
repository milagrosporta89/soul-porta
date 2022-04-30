import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import "./styles.scss";
import { useAuth } from "../../context/AuthContext";

const LogOut = () => {
  const { logout, currentUser, userLoad} = useAuth(); 
  console.log(currentUser)
  console.log("current user de logout")

  if (!currentUser){
    return (
      <Grid container item spacing={1} className="logOut">
      <Grid item >
        <Link to="/register">
          <p>Registrarse</p>
        </Link>
      </Grid>
      <Grid item>
      <Link to="/login">
          <p>| Iniciar Sesion</p>
        </Link>
      </Grid>
    </Grid>
    )
  }
  return (
    <>
        <Grid container item spacing={1} className="logOut">
        <Grid item>
          <Link to="/profile">
            <p>Mi Perfil</p>
          </Link>
        </Grid>
        <Grid item>
          <button onClick={() => logout()}>
            <LogoutIcon></LogoutIcon>
          </button>
        </Grid>
      </Grid>
      </>
      )
  
};

export default LogOut;
