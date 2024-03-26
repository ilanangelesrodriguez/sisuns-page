import { useState, useEffect } from 'react';
import { IUser } from '../../../models/interfaces';
import { getUsers } from '../../../services/userService';
import styles from "../Dashboard.module.css";
import {MainContentProps} from "./MainContentProps";

export function Main({ user }: MainContentProps) {
    const [users, setUsers] = useState<IUser[]>([]);
    const [search, setSearch] = useState('');

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

    return (
        <main className={styles.dashboardMain}>
            <h1>Dashboard</h1>
            <p>Bienvenido, {user?.nombre}.</p>

            <input
                type="text"
                placeholder="Buscar usuario..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {filteredUsers.map(user => (
                user && user.rol && (
                    <div key={user.id} className={styles.userCard}>
                        <h2>{user.nombre}</h2>
                        <p>{user.correo}</p>
                        <p>{user.rol.nombre}</p>
                    </div>
                )
            ))}
        </main>
    );
}