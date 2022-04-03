import React from "react";

import "./styles.scss";
import logo from "../../img/logo-soul.JPG";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartWidget from "../cartWidget";
import SearchBar from "../searchBar";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import NavBarList from "../NavBarList";


const Navbar = () => {
  return (
    <div>
      <div className="top-container">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid itemxs={2}>
            <SearchBar></SearchBar>
          </Grid>
          <Grid item xs={3} lg={5} align="center">
            <Link to ="/" ><img src={logo}></img></Link>
          </Grid>
          <Grid item lg={2} alignItems="center">
            <p>iniciar sesion|crear cuenta</p>
          </Grid>
          <Grid item lg={1} align="center">
            <CartWidget fontSize="large"></CartWidget>
          </Grid>
        </Grid>
      </div>

      <div className="navBar-item-container">
        <NavBarList></NavBarList>
      </div>
    </div>
  );
};
export default Navbar;
