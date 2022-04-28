import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = ({children}) => {
    const { currentUser, userLoad}=useAuth()
    if (userLoad) return (<p>loading</p>)
    if(!currentUser) return <Navigate to="/"/>
  return (
 <>{children}</>
  )
}

export default ProtectedRoute