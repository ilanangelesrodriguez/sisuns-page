import styles from './CustomAlert.module.css';
import {useState} from "react";
import {CustomAlertProps} from "./ICustomAlertProps";

export function CustomAlert({ message, type, show, onClose }: CustomAlertProps) {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleBackdropClick = () => {
        setIsEnlarged(!isEnlarged);
    };

    if (!show) {
        return null;
    }

    const alertClass = type === 'success' ? styles.success : styles.error;

    return (
        <div className={`${styles.background} ${alertClass}`} onClick={handleBackdropClick}>
            <div className={`${styles.alert} ${isEnlarged ? styles.enlarged : ''}`}>
                <p>{message}</p>
                <button className={styles.alertButton} onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}
