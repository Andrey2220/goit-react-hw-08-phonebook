import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsAuth } from 'redux/auth/selectors';

const PublicRoute = ({ children }) => {
  const isAuth = useSelector(selectorIsAuth);
  return !isAuth ? children : <Navigate to="/contacts" />;
};

export default PublicRoute;
