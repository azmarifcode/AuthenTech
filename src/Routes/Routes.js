import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Register from '../components/Register';
import Wallet from '../components/Wallet';
import ErrorPage from '../components/ErrorPage';
import Root from '../Root/Root';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/wallet',
                element: (
                    <PrivateRoute>
                        <Wallet />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
