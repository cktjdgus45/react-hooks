import React, { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isExipred, setIsExipred] = useState(false);
    const [cart, setCart] = useState([]);

    return (
        <UserContext.Provider value={{ user, setUser, isExipred, setIsExipred, cart, setCart }}>
            {children}
        </UserContext.Provider>
    )
}
