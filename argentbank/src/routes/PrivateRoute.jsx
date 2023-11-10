import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useLocalStorage from '../customhooks/useLocalStorage';

function PrivateRoute({ children }) {
    const user = useSelector(state => state.authentification.user); 
    const token = useSelector((state) => state.authentification.tokenInfos);

    const [localUserToken] = useLocalStorage('userToken', null);
    const [localUserData] = useLocalStorage('userData', null);

    const isAuthenticated = (token && user) || (localUserToken && localUserData);

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
