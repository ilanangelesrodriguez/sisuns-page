import styles from './NotFound.module.css';

export function NotFound() {
    return (
        <div className={styles.notFound}>
            <div data-js="astro" className={styles.astronaut}>
                <div className={styles.head}></div>
                <div className={`${styles.arm} ${styles.armLeft}`}></div>
                <div className={`${styles.arm} ${styles.armRight}`}></div>
                <div className={styles.body}>
                    <div className={styles.panel}></div>
                </div>
                <div className={`${styles.leg} ${styles.legLeft}`}></div>
                <div className={`${styles.leg} ${styles.legRight}`}></div>
                <div className={styles.schoolbag}></div>
            </div>
            <div>
                <h1>404</h1>
                <p>Lo sentimos, no se pudo encontrar la página que buscas.</p>
            </div>

        </div>
    )
}