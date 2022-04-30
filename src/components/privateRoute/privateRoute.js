import React from 'react'
import { BrowserRouter, Routes, Route, Navigate, Redirect } from "react-router-dom";

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute