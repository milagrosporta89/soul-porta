import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

const ModalNoStock = ({open , close, outOfStock }) => {    

      const [openModal, setOpenModal] = useState (open);
    
/*       const handleClickOpen = () => {
        setOpen(true);
      }; */
    
      const handleClose = () => {
        setOpenModal(false);
      };
    console.log (outOfStock)
    console.log ("soy outOfStock del modal  ")
      return (
        <div>
   {/*        <Button variant="outlined" onClick={handleClickOpen}>
            Open alert dialog
          </Button> */}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Disculpa! Nos quedamos sin stock de los siguientes items:"}
            </DialogTitle>
            <DialogContent>
           
             {
                 outOfStock.map((e)=>  e.stock ==0 
                 ?(<p>No tenemos mas stock de {e.name}</p>)
                 :(<p>Solo quedan {e.stock} unidades de  {e.name}</p>)
                 )
               } 
          
            </DialogContent>
            <DialogActions>
              <Button onClick={close}>Aceptar</Button>
           
            </DialogActions>
          </Dialog>
        </div>
      );
    }

export default ModalNoStock