import { useState } from 'react';
import styles from './ConfirmModal.module.css';
import {IConfirmModalProps} from "./IConfirmModalProps";

export function ConfirmModal({ message, onConfirm, onClose }: IConfirmModalProps) {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleBackdropClick = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={`${styles.modal} ${isEnlarged ? styles.enlarged : ''}`}>
                <p>{message}</p>
                <div className={styles.modalButtons}>
                    <button className={`${styles.modalButton} ${styles.modalButtonConfirm}`} onClick={onConfirm}>Confirmar</button>
                    <button className={`${styles.modalButton} ${styles.modalButtonDelete}`} onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
