import { createContext, useContext, useEffect, useState } from 'react';

import { auth } from "../services/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            setUser(userAuth);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}