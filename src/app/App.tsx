import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';

import DefaultLayout from '../shared/layout/default/DefaultLayout';
import { APP_ROUTES } from '../application/constants/AppRoutes';
import Dashboard from '../modules/dashboard/Dashboard';

function App() {
  return (
    <>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<Navigate to={`/${APP_ROUTES.DASHBOARD}`} replace={true} />} />
          <Route path={`/${APP_ROUTES.DASHBOARD}`} element={<Dashboard />} />
        </Routes>
      </DefaultLayout>
    </>
  );
}

export default App;
