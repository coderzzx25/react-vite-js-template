import React, { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

const Main = lazy(() => import('@/views/main/main.jsx'));
const NotFound = lazy(() => import('@/views/notfound/notfound.jsx'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/main" />
  },
  {
    path: '/main',
    element: <Main />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

const router = createBrowserRouter(routes);

export default router;
