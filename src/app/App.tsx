import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { APP_ROUTES } from '../application/constants/AppRoutes';

import DefaultLayout from '../shared/layout/default/DefaultLayout';
import Dashboard from '../modules/dashboard/Dashboard';
import Login from '../modules/login/Login';
import AuthProvider from '../auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Navigate to={`/${APP_ROUTES.DASHBOARD}`} replace={true} />} />
          <Route path={`/${APP_ROUTES.DASHBOARD}`} element={<Dashboard />} />
          <Route path={`/${APP_ROUTES.LOGIN}`} element={<Login />} />
        </Routes>
      </DefaultLayout>
    </AuthProvider>
  );
}

export default App;
