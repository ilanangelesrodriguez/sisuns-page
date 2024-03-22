import { useState, useEffect } from 'react';
import { IUser } from "../../../models/IUser";
import styles from './UserTable.module.css';

export function UserTable() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios');
            const dataUsers = await response.json();
            const data = dataUsers.filter((user: IUser) => user.rol.nombre !== 'administrador');
            setUsers(data);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (users.length && users.length === selectedUsers.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }
    }, [users, selectedUsers]);

    const handleSelectUser = (user: IUser) => {
        if (selectedUsers.includes(user)) {
            setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
        } else {
            setSelectedUsers(prevState => [...prevState, user]);
        }
    };

    const handleSelectAll = () => {
        if (selectAll) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers(users);
        }
        setSelectAll(!selectAll);
    };

    const handleDeleteSelectedUsers = async () => {
        try {
            for (const user of selectedUsers) {
                await fetch(`https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios/${user.id}`, {
                    method: 'DELETE',
                });
            }
            setUsers(users.filter(user => !selectedUsers.includes(user)));
            setSelectedUsers([]);
        } catch (error) {
            console.error('Error al eliminar usuarios seleccionados:', error);
        }
    };

    const handleDeleteUser = async (userId: number) => {
        try {
            await fetch(`https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios/${userId}`, {
                method: 'DELETE',
            });
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return (
        <div>
            <h1 className={styles.title}>Gestión de usuarios</h1>
            <button className={`${styles.svgButton} ${styles.add}`}>
                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 14 14">
                    <path fill="currentColor" fillRule="evenodd" d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.75 4.5a.75.75 0 0 1 .75.75V10h1.75a.75.75 0 0 1 0 1.5H11.5v1.75a.75.75 0 0 1-1.5 0V11.5H8.25a.75.75 0 0 1 0-1.5H10V8.25a.75.75 0 0 1 .75-.75M5 7c1.493 0 2.834.655 3.75 1.693v.057h-.5a2 2 0 0 0-.97 3.75H.5A.5.5 0 0 1 0 12a5 5 0 0 1 5-5" clipRule="evenodd"/>
                </svg>
                Agregar usuario
            </button>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th><input type="checkbox" onChange={handleSelectAll} checked={selectAll}/></th>
                    <th>Nombre</th>
                    <th className={styles.disabled}>Correo</th>
                    <th className={styles.disabled}>Rol</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((user) => (
                    <tr key={user.id}>
                        <td><input type="checkbox" onChange={() => handleSelectUser(user)} checked={selectedUsers.includes(user)}/></td>
                        <td>{user.nombre}</td>
                        <td className={styles.disabled}>{user.correo}</td>
                        <td className={styles.disabled}>{user.rol.nombre}</td>
                        <td className={styles.action}>
                            <button className={`${styles.svgButton} ${styles.edit}`}>
                                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z"/>
                                    </g>
                                </svg>
                            </button>
                            <button className={`${styles.svgButton} ${styles.delete}`} onClick={() => handleDeleteUser(user.id)}>
                                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 26 26">
                                    <path fill="currentColor"
                                          d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2zm4 0v12h2V10h-2z"/>
                                </svg>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button className={`${styles.deleteSelected} ${styles.delete}`} onClick={handleDeleteSelectedUsers}>Eliminar seleccionados</button>
            <p>Total de usuarios: {users.length}</p>
        </div>
    );
}