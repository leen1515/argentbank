import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../ReduxFunctions/userActions';

function SetRoutes() {
    const dispatch = useDispatch();

    useEffect(() => {
        const userToken = localStorage.getItem('userToken');
        const userData = localStorage.getItem('userData');

        if (userToken && userData) {
            dispatch(loginSuccess(JSON.parse(userData)));
            dispatch({ type: "TOKEN_INFOS", payload: userToken });
        }
    }, [dispatch]);

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
