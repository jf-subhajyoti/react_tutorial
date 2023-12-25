import React from 'react'
import { Navigate } from 'react-router-dom'

const NotFound = () => {
  return (
    // It navigates it to home page when we reach to not found page
    <Navigate to='/' />
  )
}

export default NotFound
