
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import "./styles.scss"


const NavBarItems = () => {
  return (
    
    <div className="navItems">
        <a href ="/"> HOME</a>
        <a href ="/productos"> PRODUCTOS</a>
        <a href ="/nosotras"> NOSOTRAS</a>
        <a href ="/politica"> POLITICA DE DEVOLUCION</a>
        <a href="contacto"> CONTACTO</a>
 


    </div>
  );
}
export default NavBarItems