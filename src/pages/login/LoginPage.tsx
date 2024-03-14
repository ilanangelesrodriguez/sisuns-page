import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import {useAuth} from "./auth/AuthContext.tsx";

export function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const { login, isAuthenticated } = useAuth();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);

        if (username === 'usuario' && password === 'contraseña') {
            login();
            navigate('/dashboard');
        } else {
            setError('Nombre de usuario o contraseña incorrectos');
        }

        setLoading(false);
    };

    return (
        <div className={styles.loginFormPage}>
            <h1>Login</h1>

            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario</label>
                <input
                    className={styles.loginInput}
                    type="text"
                    id="username"
                    name="Usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Contraseña</label>
                <input
                    className={styles.loginInput}
                    type="password"
                    id="password"
                    name="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p>{error}</p>}
                <button className={styles.button} type="submit" disabled={loading}>
                    {loading ? 'Cargando...' : 'Ingresar'}
                </button>
            </form>
        </div>
    );
}