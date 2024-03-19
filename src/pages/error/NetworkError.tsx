import ErrorServer from '../../assets/error-server.png';
import styles from './NetworkError.module.css';
import {useEffect, useState} from "react";
import {Loader} from "../../components/loader/Loader";

export function NetworkError() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
        return () => clearTimeout(timer);

    }, [isLoaded]);

    return (
        isLoaded ? (
            <div className={styles.networkError}>
                <img src={ErrorServer} className={styles.errorServerImg} alt="Error Server"/>
                <h1>Error de red</h1>
                <p>Error al conectar con el servidor. Por favor, intenta nuevamente más tarde.</p>
            </div>
        ) : (
            <Loader/>
        )
    );
}