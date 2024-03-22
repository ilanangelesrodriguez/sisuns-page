import styles from "./Loader.module.css";

export function Loader() {
    return (
        <div className={styles.loaderDiv}>
            <div className={styles.loader}>
                <div className={styles.orbe} style={{['--index' as never]: '0'}}></div>
                <div className={styles.orbe} style={{['--index' as never]: '1'}}></div>
                <div className={styles.orbe} style={{['--index' as never]: '2'}}></div>
                <div className={styles.orbe} style={{['--index' as never]: '3'}}></div>
                <div className={styles.orbe} style={{['--index' as never]: '4'}}></div>
            </div>
        </div>
    );
}