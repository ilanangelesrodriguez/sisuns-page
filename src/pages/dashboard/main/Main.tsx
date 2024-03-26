import { useState } from 'react';
import styles from "./Main.module.css";
import {MainContentProps} from "./MainContentProps";
import {UserList} from "../../../components/userList/UserList";

export function Main({ user }: MainContentProps) {
    const [search, setSearch] = useState('');

    return (
        <main className={styles.dashboardMain}>
            <h2>Bienvenido, {user?.nombre}</h2>

            <input
                type="text"
                placeholder="Buscar usuario..."
                className={styles.dashboardInputSearch}
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <UserList search={search}/>
        </main>
    );
}