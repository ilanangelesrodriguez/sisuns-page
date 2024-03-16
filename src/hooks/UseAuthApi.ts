import { useState } from 'react';
import { useApi } from './UseApi';
import { useAuth } from './useAuth';
import { IUser as Usuario } from '../interfaces/IUser';

export function useAuthApi(url: string) {
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
                setError('Correo o contraseña incorrectos');
            }
        } else {
            setError('No se pudo obtener los datos de la API');
        }

        setLoading(false);
    };

    return { email, setEmail, password, setPassword, error, loading, handleSubmit };
}