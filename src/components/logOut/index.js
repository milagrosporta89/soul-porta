import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import "./styles.scss";
import { useAuth } from '../../context/AuthContext';

const LogOut = () => {
    const { logout }=useAuth()

  return (

      <>
      <Grid container spacing={2} className="logOut" >
        <Grid item>
            <Link to="/profile"><div>Mi Perfil</div></Link>
        </Grid>
        <Grid item>

        <button onClick={()=> logout()}><LogoutIcon></LogoutIcon></button>
        </Grid>
        
        <br></br>
       

      </Grid>
      </>
  )
}

export default LogOut