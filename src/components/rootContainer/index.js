import { Grid, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import "./styles.scss"

const RootContainer = (props) => {
  return(
       <Container fixed  >
           {props.children}

       </Container>
  )
}
export default RootContainer