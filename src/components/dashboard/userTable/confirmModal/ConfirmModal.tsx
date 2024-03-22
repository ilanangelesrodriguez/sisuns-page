import styles from './ConfirmModal.module.css';
import {ConfirmModalProps} from "./ConfirmModalProps";

export function ConfirmModal({ message, onConfirm, onClose }: ConfirmModalProps) {
    return (
        <div className={styles.modal}>
            <p>{message}</p>
            <button onClick={onConfirm}>Confirmar</button>
            <button onClick={onClose}>Cancelar</button>
        </div>
    );
}
