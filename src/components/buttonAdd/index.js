import { Button } from '@mui/material';
import React from 'react'
import "./styles.scss";
const ButtonAdd = ({name, funct}) => {
  return (
      <button className="buttonAdd">{name}</button>
  )
}

export default ButtonAdd