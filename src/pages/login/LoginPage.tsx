import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';

export function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (username === 'usuario' && password === 'contraseña') {
            // Almacena el estado de autenticación en el almacenamiento local del navegador
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/dashboard');
        } else {
            // Si la validación falla, establece un mensaje de error
            setError('Nombre de usuario o contraseña incorrectos');
        }
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
                <button className={styles.button} type="submit">Ingresar</button>
            </form>

        </div>
    )
}