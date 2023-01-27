import React from 'react';
import { Outlet } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext';
import Header from './header/Header';

const App = () => {
    return (
        <UserProvider>
            <Header />
            <Outlet />
        </UserProvider>
    )
}

export default App;