import styles from "../Dashboard.module.css";
import {MainContentProps} from "./MainContentProps";

export function Main({ user }: MainContentProps) {

    return (
        <main className={styles.dashboardMain}>
            <h1>Dashboard</h1>
            <p>Bienvenido, {user?.nombre}.</p>
        </main>
    );
}
