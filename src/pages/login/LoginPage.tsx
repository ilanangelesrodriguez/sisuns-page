import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import {useAuthApi} from "../../hooks/UseAuthApi";
import {useAuth} from "../../hooks/useAuth";

export function LoginPage() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { email, setEmail, password, setPassword, error, loading, handleSubmit } = useAuthApi('http://localhost:8080/usuarios');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className={styles.loginFormPage}>
            <h1>Login</h1>

            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor="email">Correo</label>
                <input
                    className={styles.loginInput}
                    type="text"
                    id="email"
                    name="Usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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