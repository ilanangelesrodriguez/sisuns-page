import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from "../../../models/IUser";
import styles from './UserTable.module.css';
import { getUsers, deleteUser } from '../../../services/userService';
import { ConfirmModal } from '../confirmModal/ConfirmModal';
import {EditButton} from "./editButton/EditButton";
import {DeleteButton} from "./deleteButton/DeleteButton";
import {AddButton} from "./addButton/AddButton";

export function UserTable() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<number | null>(null);
    const navigate = useNavigate();

    const handleEditUser = (userId: number) => {
        navigate(`edit-user/${userId}`);
    };

    useEffect(() => {
        const fetchAndSetData = async () => {
            try {
                const dataUsers = await getUsers();
                const data = dataUsers.filter((user: IUser) => user.rol.nombre !== 'administrador');
                setUsers(data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            }
        };

        fetchAndSetData().catch(error => console.error('Error al obtener los datos:', error));
    }, []);

    const handleDeleteUser = (userId: number) => {
        setUserToDelete(userId);
        setModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (userToDelete === null) return;
        try {
            await deleteUser(userToDelete);
            setUsers(users.filter(user => user.id !== userToDelete));
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        } finally {
            setModalOpen(false);
        }
    };

    return (
        <div>
            <h1 className={styles.title}>Gestión de usuarios</h1>
            <AddButton />
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.tableTh}>Nombre</th>
                    <th className={`${styles.tableTh} ${styles.disabled}`}>Correo</th>
                    <th className={`${styles.tableTh}`}>Rol</th>
                    <th className={styles.tableTh}>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((user) => (
                    <tr key={user.id}>
                        <td className={styles.tableTd}>{user.nombre}</td>
                        <td className={`${styles.tableTd} ${styles.disabled}`}>{user.correo}</td>
                        <td className={`${styles.tableTd}`}>{user.rol.nombre}</td>
                        <td className={`${styles.tableTd} ${styles.action}`}>
                            <EditButton userId={user.id} handleUser={handleEditUser}/>
                            <DeleteButton userId={user.id} handleUser={handleDeleteUser}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <p>Total de usuarios: {users.length}</p>
            {isModalOpen && (
                <ConfirmModal
                    message="¿Estás seguro de que quieres eliminar a este usuario?"
                    onConfirm={handleConfirmDelete}
                    onClose={() => setModalOpen(false)}
                />
            )}
        </div>
    );
}