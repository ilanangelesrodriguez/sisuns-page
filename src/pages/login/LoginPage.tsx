import styles from './LoginPage.module.css';

export function LoginPage() {
    return (
        <div className={styles.loginFormPage}>
            <h1>Login Page</h1>

            <form className={styles.loginForm}>
                <label htmlFor="username">Username</label>
                <input className={styles.loginInput} type="text" id="username" name="username" />

                <label htmlFor="password">Password</label>
                <input className={styles.loginInput} type="password" id="password" name="password" />

                <button className={styles.button} type="submit">Login</button>
            </form>

        </div>
    )
}