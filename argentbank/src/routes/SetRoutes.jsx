import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../ReduxFunctions/userActions';
import useLocalStorage from '../customhooks/useLocalStorage';

/**
 * Configures and sets the routes.
 *
 * This component handles the routing setup using React Router. 
 * It defines the main paths: Login, LandingPage, and Dashboard. The Dashboard route
 * is protected by a PrivateRoute component. It also uses an effect to rehydrate user data from
 * local storage into the Redux store on app initialization.
 *
 * @name SetRoutesComponent
 * @memberof UI
 * @component
 * @example
 * return (
 *   <SetRoutes />
 * )
 */
function SetRoutes() {
    const dispatch = useDispatch();
    const [userToken] = useLocalStorage('userToken', null);
    const [userData] = useLocalStorage('userData', null);

    /**
     * Effect for rehydrating user data and token from localstorage into Redux store.
     */
    useEffect(() => {
        if (userToken && userData) {
            dispatch(loginSuccess(userData));
            dispatch({ type: "TOKEN_INFOS", payload: userToken });
        }
    }, [dispatch, userToken, userData]);

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            } />
        </Routes>
    );
}

export default SetRoutes;
