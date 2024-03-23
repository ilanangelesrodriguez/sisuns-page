import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css';
import {useUserLogin} from "../../hooks/UseUserLogin";
import {useAuth} from "../../hooks/useAuth";
import { NetworkError } from '../error/NetworkError';
import {ERRORS} from "../../models/ConstantsErrors";
import {Loader} from "../../components/loader/Loader";
import {ShowPassword} from "./showPassword/ShowPassword";
import loginImage from '../../assets/login.svg';

export function LoginPage() {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const { email, setEmail, password, setPassword, error, loading, handleSubmit } = useUserLogin();
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    if (error === ERRORS.API_FAILURE) {
        return <NetworkError />;
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
        { loading ? (
                <Loader />
            ) : (
            <div className={styles.loginFormPage}>
                <div className={styles.loginFormDiv}>
                    <img className={styles.loginImage} src={loginImage} alt="Login" />
                </div>
                <div className={styles.loginFormDiv}>
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <div className={styles.loginFormHead}>
                            <h1 className={styles.loginTitle}>Bienvenido</h1>
                            <p>Introduce tus credenciales</p>
                        </div>

                        <label htmlFor="email">Correo</label>
                        <input className={`${styles.loginInput} ${styles.loginInputDiv}`}
                               required={true} type="text" id="email" name="Usuario" value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Contraseña</label>
                        <div className={styles.loginPassword}>
                            <input className={`${styles.loginInput} ${styles.loginInputPassword}`}
                                   required={true} type={showPassword ? "text" : "password"} id="password"
                                   name="Contraseña"
                                   value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                            <ShowPassword showPassword={showPassword} toggleShowPassword={toggleShowPassword}/>
                        </div>

                        {error && <p>{error}</p>}
                        <button className={styles.button} type="submit" disabled={loading}>
                            Ingresar
                        </button>
                    </form>
                </div>
            </div>
        )
        }
        </>
    );
}