import React from "react";
import { Link } from "react-router-dom";



const NavBarList = () => {
  return (
    
    
    <div className="navItems">
    
     <Link to="/"> HOME</Link>
        <Link to ="/productos"> PRODUCTOS</Link>
        <Link to ="/nosotras"> NOSOTRAS</Link>
        <Link to ="/politica"> POLITICA DE DEVOLUCION</Link>
        <Link to="contacto"> CONTACTO</Link>
 


    </div>
  );
}
export default NavBarList