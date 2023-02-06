import React, { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isExipred, setIsExipred] = useState(false);
    return (
        <UserContext.Provider value={{ user, setUser, isExipred, setIsExipred }}>
            {children}
        </UserContext.Provider>
    )
}
