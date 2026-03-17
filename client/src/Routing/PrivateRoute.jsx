import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {

  const  { isAuthenticated } = useSelector(state => state.auth);

  return (
    isAuthenticated ? <Outlet /> : <Navigate to='/login' />
  )
}

export default PrivateRoute
