import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // By useNavigate hook we can navigate to a particular page
    setTimeout(() => {
      navigate('/');

      // functions like a back button of a browser
      // navigate(-1);
    }, 1000)
  }, []);

  return (
    // It navigates it to home page when we reach to not found page
    // <Navigate to='/' />

    <h1>Page Not Found</h1>
  )
}

export default NotFound
