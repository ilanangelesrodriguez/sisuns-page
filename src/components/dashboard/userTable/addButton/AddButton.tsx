import styles from "../UserTable.module.css";

export function AddButton() {
    return (
        <button className={`${styles.svgButton} ${styles.add}`}>
            <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="200" height="200"
                 viewBox="0 0 14 14">
                <path fill="currentColor" fillRule="evenodd"
                      d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.75 4.5a.75.75 0 0 1 .75.75V10h1.75a.75.75 0 0 1 0 1.5H11.5v1.75a.75.75 0 0 1-1.5 0V11.5H8.25a.75.75 0 0 1 0-1.5H10V8.25a.75.75 0 0 1 .75-.75M5 7c1.493 0 2.834.655 3.75 1.693v.057h-.5a2 2 0 0 0-.97 3.75H.5A.5.5 0 0 1 0 12a5 5 0 0 1 5-5"
                      clipRule="evenodd"/>
            </svg>
            Agregar usuario
        </button>
    );
}