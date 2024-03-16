import { useState } from 'react';
import { useApi } from './UseApi';
import { useAuth } from './useAuth';
import { IUser as Usuario } from '../models/IUser';
import {ERRORS} from "../models/ConstantsErrors";

export function useUserLogin(url: string) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();

    const { data: apiData } = useApi(url);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);

        if (apiData) {
            const usuarios = apiData as Usuario[];
            const usuario = usuarios.find(usuario => usuario.correo === email && usuario.contrasena === password);

            if (usuario) {
                login(usuario);
            } else {
                setError(ERRORS.INVALID_CREDENTIALS);
            }
        } else {
            setError(ERRORS.API_FAILURE);
        }

        setLoading(false);
    };


    return { email, setEmail, password, setPassword, error, loading, handleSubmit };
}