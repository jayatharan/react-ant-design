import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { APP_ROUTES } from '../application/constants/AppRoutes';
import useLoadUserDetails from '../auth/LoadUserDetailsHook';
import useAuthState from '../auth/AuthHeaderHook';

import DefaultLayout from '../shared/layout/default/DefaultLayout';
import Dashboard from '../modules/dashboard/Dashboard';
import Login from '../modules/login/Login';
import Page404 from '../modules/errors/Page404';
import Page401 from '../modules/errors/Page401';
import Home from '../modules/home/Home';
import Profile from '../modules/profile/Profile';
import ProtectedRoute from '../auth/ProtectedRoute';

function App() {

  const authState = useAuthState();
  const loadUserDetails = useLoadUserDetails();

  useEffect(()=>{
    if(authState.authenticated){
      loadUserDetails();
    }
  },[authState])

  return (
    <DefaultLayout>
      <Routes>
          <Route path="/" element={<Navigate to={`/${APP_ROUTES.DASHBOARD}`} replace={true} />} />
          <Route path={`/${APP_ROUTES.HOME}`} element={<Home />} />
          <Route path={`/${APP_ROUTES.LOGIN}`} element={<Login />} />
          <Route path={`/${APP_ROUTES.PROFILE}`} element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path={`/${APP_ROUTES.DASHBOARD}`} element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path={`/${APP_ROUTES.NOT_AUTHORIZED}`} element={<Page401 />} />
          <Route path='*' element={<Page404 />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
