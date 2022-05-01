import React, { useState } from "react";

import "./styles.scss";
import logo from "../../img/logo-soul.JPG";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartWidget from "../cartWidget";
import SearchBar from "../searchBar";
import { Divider, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import NavBarList from "../NavBarList";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { stock } from "../../data/stock";
import { fileUpload } from "../../firebase/fileUpload";
import { useAuth } from "../../context/AuthContext";
import LogOut from "../logOut";
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from "../sidebar";
const Navbar = () => {
  const [handleMenu, setHandleMenu] =useState(false)
  const { currentUser }=useAuth()
  console.log(currentUser)

const handleUpload =  ()=> {
  stock.forEach ( async e => {
    // const imgURL = await fileUpload(e.img)
   await addDoc(collection(db,"products"),e)
  })  
}
const handleOpenMenu = () => {
  setHandleMenu(!handleMenu)

}


  return (
    <>
    <div>
      <div className="top-container">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item className="menu-icon" >
            <button onClick={(e)=>{handleOpenMenu()}}><MenuIcon></MenuIcon> </button>
          </Grid>
          <Grid item xs={4} lg={2}>
            <SearchBar></SearchBar>
          </Grid>
          <Grid item xs={3} lg={5} align="center">
            <Link to ="/" ><img src={logo}></img></Link>
          </Grid>
          <Grid item lg={2} alignItems="center">
          <LogOut className="responsive"></LogOut>
            
          </Grid>
          <Grid item lg={1} align="center">
            <CartWidget fontSize="large"></CartWidget>
          </Grid>
      <Divider className="divider" style={{width:"100%"}}></Divider>
        </Grid>
        {/* <button onClick={handleUpload}>agregar a bd</button> */}
      </div>

      <div className="navBar-item-container">
        <NavBarList></NavBarList>
      </div>
    </div>
    { handleMenu &&  <SideBar close={handleOpenMenu}></SideBar>

    }
   
    </>


  );
};
export default Navbar;
