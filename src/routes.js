import React from 'react';
import Home from './pages/home';
import Login from './pages/login';
import NotFound from './pages/NotFound';

const routes = [
    {path: '/', element: Home, exact: true},
    {path: '/home', element: Home, exact: true},
    {path: '/login', element: Login}, // // ... 其他路由
    {path: '*', element: NotFound} // 404 页面
];

export default routes;
