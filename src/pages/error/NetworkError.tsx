import ErrorServer from '../../assets/error-server.svg';
import styles from './NetworkError.module.css';

export function NetworkError() {
    return (
        <div className={styles.networkError}>
            <img src={ErrorServer} className={styles.errorServerImg} alt="Error Server" />
            <h1>Error de red</h1>
            <p>Error al conectar con el servidor. Por favor, intenta nuevamente más tarde.</p>
        </div>
    )
}