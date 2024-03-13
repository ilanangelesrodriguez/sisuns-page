import styles from './LoginPage.module.css';

export function LoginPage() {
    return (
        <div className={styles.loginFormPage}>
            <h1>Login</h1>

            <form className={styles.loginForm}>
                <label htmlFor="username">Username</label>
                <input className={styles.loginInput} type="text" id="username" name="Usuario" />

                <label htmlFor="password">Password</label>
                <input className={styles.loginInput} type="password" id="password" name="Contraseña" />

                <button className={styles.button} type="submit">Ingresar</button>
            </form>

        </div>
    )
}