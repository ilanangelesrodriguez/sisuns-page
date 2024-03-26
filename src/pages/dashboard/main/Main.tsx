import { useState, useEffect } from 'react';
import { IUser } from '../../../models/interfaces';
import { getUsers } from '../../../services/userService';
import styles from "./Main.module.css";
import {MainContentProps} from "./MainContentProps";

export function Main({ user }: MainContentProps) {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');
    const [displayCount, setDisplayCount] = useState(4); // Nuevo estado para controlar cuántos usuarios se muestran

    useEffect(() => {
        const fetchUsers = async () => {
            const usersFromDb = await getUsers();
            setUsers(usersFromDb);
        };
        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user =>
        user && user.nombre && user.nombre.toLowerCase().includes(search.toLowerCase())
    );

    const displayedUsers = filteredUsers.slice(0, displayCount); // Solo se muestran los primeros 'displayCount' usuarios

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

            <div className={styles.userCards}>
                {displayedUsers.map(user => (
                    user && user.rol && (
                        <div key={user.id} className={styles.userCard}>
                            <h2 className={styles.userCardH2}>{user.nombre}</h2>
                            <p className={styles.userCardP}>{user.correo}</p>
                            <p className={styles.userCardP}>{user.rol.nombre}</p>
                        </div>
                    )
                ))}
            </div>

            {displayCount < filteredUsers.length && ( // Solo se muestra el botón si hay más usuarios para mostrar
                <button onClick={() => setDisplayCount(displayCount + 4)}>Mostrar más</button>
            )}
        </main>
    );
}