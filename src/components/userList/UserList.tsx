import { useState, useEffect } from 'react';
import styles from "./UserList.module.css";
import {UserListProps} from "./UserListProps";
import {IUser} from "../../models/interfaces";
import {getUsers} from "../../services/userService";

export function UserList({ search }: UserListProps) {
    const [users, setUsers] = useState<IUser[]>([]);
    const [displayCount, setDisplayCount] = useState(4);
    const [allDisplayed, setAllDisplayed] = useState(false); // Nuevo estado para controlar si todos los usuarios se están mostrando

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

    const displayedUsers = filteredUsers.slice(0, displayCount);

    return (
        <>
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
            {displayCount < filteredUsers.length && !allDisplayed && (
                <button onClick={() => {setDisplayCount(filteredUsers.length); setAllDisplayed(true);}}>Mostrar más</button>
            )}
            {allDisplayed && (
                <button onClick={() => {setDisplayCount(4); setAllDisplayed(false);}}>Mostrar menos</button>
            )}
        </>
    );
}