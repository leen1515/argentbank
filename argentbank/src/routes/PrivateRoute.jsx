import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useLocalStorage from '../customhooks/useLocalStorage';

/**
 * A component for handling private routes
 *
 * `PrivateRoute` checks if the user is authenticated by verifying the Redux store's state
 * or by checking user data and tokens stored in local storage. It renders the child components
 * if the user is authenticated or redirects to the login page if not authenticated.
 *
 * @name PrivateRouteComponent
 * @memberof UI
 * @component
 * @param {React.ReactNode} children - Child components to be rendered if the user is authenticated.
 * @example
 * return (
 *   <PrivateRoute>
 *     <ProtectedComponent />
 *   </PrivateRoute>
 * )
 */
function PrivateRoute({ children }) {
    const user = useSelector(state => state.authentification.user); 
    const token = useSelector((state) => state.authentification.tokenInfos);

    const [localUserToken] = useLocalStorage('userToken', null);
    const [localUserData] = useLocalStorage('userData', null);

    const isAuthenticated = (token && user) || (localUserToken && localUserData);

    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
