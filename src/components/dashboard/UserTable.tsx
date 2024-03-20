import { useState, useEffect } from 'react';
import { IUser } from "../../models/IUser";
import styles from './UserTable.module.css';

export function UserTable() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
    const [selectAll, setSelectAll] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch('https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios');
            const data = await response.json();
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
            <h1>Gestión de usuarios</h1>
            <button>Agregar usuario</button>
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
                        <td>
                            <button>Editar</button>
                            <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={handleDeleteSelectedUsers}>Eliminar seleccionados</button>
            <p>Total de usuarios: {users.length}</p>
        </div>
    );
}