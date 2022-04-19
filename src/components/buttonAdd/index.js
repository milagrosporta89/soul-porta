import { Button } from '@mui/material';
import React from 'react'
import "./styles.scss";
const ButtonAdd = ({name, funct,type}) => {
  return (
      <button className="buttonAdd" type={type}>{name}</button>
  )
}

export default ButtonAdd