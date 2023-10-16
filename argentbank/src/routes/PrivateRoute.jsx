import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children }) {
    const user = useSelector(state => state.authentification.user); 
    const token = useSelector((state) => state.authentification.tokenInfos);

    const isTokenValid = token ? true : false;

    return isTokenValid && user
    ?children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
