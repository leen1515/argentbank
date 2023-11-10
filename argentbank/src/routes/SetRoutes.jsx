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

function SetRoutes() {
    const dispatch = useDispatch();
    const [userToken] = useLocalStorage('userToken', null);
    const [userData] = useLocalStorage('userData', null);

    useEffect(() => {
        console.log(userToken, userData);
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
