import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from "../../../models/IUser";
import styles from './UserTable.module.css';
import { getUsers, deleteUser } from '../../../services/userService';
import { ConfirmModal } from './confirmModal/ConfirmModal';
import {EditButton} from "./editButton/EditButton";
import {DeleteButton} from "./deleteButton/DeleteButton";



export function UserTable() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
    const [selectAll, setSelectAll] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<number | null>(null);

    const navigate = useNavigate();

    const [isDeleteSelectedModalOpen, setDeleteSelectedModalOpen] = useState(false);

    const handleOpenDeleteSelectedModal = () => {
        setDeleteSelectedModalOpen(true);
    };

    const handleEditUser = (userId: number) => {
        console.log(`Navigating to edit user with ID: ${userId}`);
        navigate(`edit-user/${userId}`);
    };

    const fetchData = async () => {
        try {
            const dataUsers = await getUsers();
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
                await deleteUser(user.id);
            }
            setUsers(users.filter(user => !selectedUsers.includes(user)));
            setSelectedUsers([]);
        } catch (error) {
            console.error('Error al eliminar usuarios seleccionados:', error);
        }
    };

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
            <button className={`${styles.svgButton} ${styles.add}`}>
                <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="200" height="200"
                     viewBox="0 0 14 14">
                    <path fill="currentColor" fillRule="evenodd"
                          d="M8 3a3 3 0 1 1-6 0a3 3 0 0 1 6 0m2.75 4.5a.75.75 0 0 1 .75.75V10h1.75a.75.75 0 0 1 0 1.5H11.5v1.75a.75.75 0 0 1-1.5 0V11.5H8.25a.75.75 0 0 1 0-1.5H10V8.25a.75.75 0 0 1 .75-.75M5 7c1.493 0 2.834.655 3.75 1.693v.057h-.5a2 2 0 0 0-.97 3.75H.5A.5.5 0 0 1 0 12a5 5 0 0 1 5-5"
                          clipRule="evenodd"/>
                </svg>
                Agregar usuario
            </button>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th><input className={styles.checkbox} type="checkbox" onChange={handleSelectAll}
                               checked={selectAll}/></th>
                    <th>Nombre</th>
                    <th className={styles.disabled}>Correo</th>
                    <th className={styles.disabled}>Rol</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map((user) => (
                    <tr key={user.id}>
                        <td><input className={styles.checkbox} type="checkbox" onChange={() => handleSelectUser(user)}
                                   checked={selectedUsers.includes(user)}/></td>
                        <td>{user.nombre}</td>
                        <td className={styles.disabled}>{user.correo}</td>
                        <td className={styles.disabled}>{user.rol.nombre}</td>
                        <td className={styles.action}>
                            <EditButton userId={user.id} handleUser={handleEditUser}/>
                            <DeleteButton userId={user.id} handleUser={handleDeleteUser}/>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                className={`${styles.deleteSelected} ${styles.delete}`}
                onClick={handleOpenDeleteSelectedModal}
                disabled={selectedUsers.length === 0}
            >
                Eliminar seleccionados
            </button>
            {isDeleteSelectedModalOpen && (
                <ConfirmModal
                    message="¿Estás seguro de que quieres eliminar los usuarios seleccionados?"
                    onConfirm={handleDeleteSelectedUsers}
                    onClose={() => setDeleteSelectedModalOpen(false)}
                />
            )}
            <p>Total de usuarios: {users.length}</p>
            {isModalOpen && (
                <ConfirmModal
                    message="¿Estás seguro de que quieres eliminar a este usuario?"
                    onConfirm={handleConfirmDelete}
                    onClose={() => setModalOpen(false)}
                />
            )}
            <p>Total de usuarios seleccionados: {selectedUsers.length}</p>
        </div>
    );
}