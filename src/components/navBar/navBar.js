import React from 'react'
import NavBarItems from '../navBarItems/navBarItems'
import "./styles.scss"
import logo from "../../img/logo-soul.JPG"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function navBar() {


    
  return (
      <div>
          <div className='top-container'>
              <p>searchBAr</p>
                <img src={logo}></img>
                <p>iniciar sesion|crear cuenta</p>
                <ShoppingCartIcon></ShoppingCartIcon>
          </div>
        

    <div className='navBar-item-container'>
        <NavBarItems></NavBarItems>
    </div>

      </div>
  )
}
