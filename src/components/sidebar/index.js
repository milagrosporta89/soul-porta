import { Divider, Grid } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.scss";


const sidebarNavItems = [
    {
        display: 'HOME',
        to: '/',
    },
    {
        display: 'PRODUCTOS',
        to: '/productos',
    },
    {
        display: 'NOSOTRAS',
        to: '/nosotras',
    },
    {
        display: 'POLITICA DE DEVOLUCION',
        to: '/politica',
    },
    {
        display: 'CONTACTO',
        to: '/contacto',
    },
    {
        display: 'INICIAR SESION',
        to: '/login',

    },
]

const SideBar = ({open, close}) => {
    const handleCloseMenu = () => {
        
    }

  return (
      <div className="sidebar">
          <Grid container direction="column" >
              
          {
              sidebarNavItems.map(item=>(
                  <>
                  
                  <Grid item style={{marginTop:"15px", marginLeft:"10px" , marginBottom:"10px"}}>
                      <button onClick={close}><Link to={item.to}>{item.display}</Link></button>

                  </Grid>
                  <Divider></Divider>
                  </>
              
              
              ))
          }


        
        </Grid>

      </div>
  
  )
}

export default SideBar