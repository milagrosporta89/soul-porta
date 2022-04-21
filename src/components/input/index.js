import { TextField } from '@mui/material'
import React from 'react'

const Input = ({variant, label, name, value, onChange, rules, error=null, helperText, ...other}) => {

  return (
    <TextField
    variant={variant}
    label={label}
    name={name}
    value={value}
    onChange={onChange}

    {...(error && {error:true, helperText:error})}
    {...other}
    />
        
  )
}

export default Input