import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login';
import LandingPage from '../pages/LandingPage';
import Dashboard from '../pages/Dashboard';

function SetRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* <PrivateRoute path="/dashboard" component={<Dashboard/>} /> */}
    </Routes>
  );
}

export default SetRoutes;
