import styles from './EditButton.module.css';
import {ButtonProps} from "../ButtonProps";

export function EditButton({ userId, handleUser }: ButtonProps) {
    return (
        <button className={`${styles.svgButton} ${styles.edit}`} onClick={() => handleUser(userId)}>
            <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z"/>
                </g>
            </svg>
        </button>
    );
}
