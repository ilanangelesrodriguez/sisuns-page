import { useState } from 'react';
import styles from './ConfirmModal.module.css';
import {ConfirmModalProps} from "./ConfirmModalProps";

export function ConfirmModal({ message, onConfirm, onClose }: ConfirmModalProps) {
    const [isEnlarged, setIsEnlarged] = useState(false);

    const handleBackdropClick = () => {
        setIsEnlarged(!isEnlarged);
    };

    return (
        <div className={styles.backdrop} onClick={handleBackdropClick}>
            <div className={`${styles.modal} ${isEnlarged ? styles.enlarged : ''}`}>
                <p>{message}</p>
                <div className={styles.modalButtons}>
                    <button className={styles.modalButton} onClick={onConfirm}>Confirmar</button>
                    <button className={styles.modalButton} onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </div>
    );
}
