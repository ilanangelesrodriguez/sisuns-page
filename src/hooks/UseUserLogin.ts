import { useState } from 'react';
import { useAuth } from './useAuth';
import { IUser as Usuario } from '../models/interfaces/IUser';
import {ERRORS} from "../models/ConstantsErrors";
import { getUsers } from '../services/userService';

export function useUserLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);

        try {
            const usuarios = await getUsers();
            const usuario = usuarios.find((usuario: Usuario) => usuario.correo === email && usuario.contrasena === password);

            if (usuario) {
                login(usuario);
            } else {
                setError(ERRORS.INVALID_CREDENTIALS);
            }
        } catch (error) {
            setError(ERRORS.API_FAILURE);
        }

        setLoading(false);
    };

    return { email, setEmail, password, setPassword, error, loading, handleSubmit };
}