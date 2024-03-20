import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import {useUserLogin} from "../../hooks/UseUserLogin";
import {useAuth} from "../../hooks/useAuth";
import { NetworkError } from '../error/NetworkError';
import {ERRORS} from "../../models/ConstantsErrors";
import {Loader} from "../../components/loader/Loader";

export function LoginPage() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { email, setEmail, password, setPassword, error, loading, handleSubmit } = useUserLogin('https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios');

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    if (error === ERRORS.API_FAILURE) {
        return <NetworkError />;
    }

    return (
        <>
        { loading ? (
                <Loader />
            ) : (
            <div className={styles.loginFormPage}>
                <h1>Login</h1>

                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo</label>
                    <input
                        className={styles.loginInput}
                        required={true}
                        type="text"
                        id="email"
                        name="Usuario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        className={styles.loginInput}
                        required={true}
                        type="password"
                        id="password"
                        name="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p>{error}</p>}
                    <button className={styles.button} type="submit" disabled={loading}>
                        Ingresar
                    </button>
                </form>
            </div>
        )
        }
        </>
    );
}