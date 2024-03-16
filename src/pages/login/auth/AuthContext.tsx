import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {IUser} from "../../../interfaces/IUser";

interface IAuthContext {
    isAuthenticated: boolean;
    login: (user: IUser) => void; // Actualiza el tipo de login para aceptar un usuario
    logout: () => void;
    user: IUser | null;
}

export const AuthContext = createContext<IAuthContext | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });
    const [user, setUser] = useState<IUser | null>(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const navigate = useNavigate();

    const login = (user: IUser) => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(user)); // Guardar la información del usuario
        setIsAuthenticated(true);
        setUser(user);
        navigate('/dashboard');
    };

    const logout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user'); // Eliminar la información del usuario
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
}