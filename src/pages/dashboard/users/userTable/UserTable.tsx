import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from "../../../../models/interfaces";
import styles from './UserTable.module.css';
import { getUsers, deleteUser } from '../../../../services/userService';
import { ConfirmModal } from '../../../../components/dashboard/confirmModal/ConfirmModal';
import {EditButton} from "./editButton/EditButton";
import {DeleteButton} from "./deleteButton/DeleteButton";
import {CreateButton} from "./createButton/CreateButton";
import {CustomAlert} from "../../../../components/dashboard/customAlert/CustomAlert";

export function UserTable() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState<number | null>(null);
    const navigate = useNavigate();
    const [showDeleteSuccessAlert, setShowDeleteSuccessAlert] = useState(false);

    const handleEditUser = (userId: number) => {
        navigate(`edit-user/${userId}`);
    };

    const handleCreateUser = () => {
        navigate('create-user');
    };

    useEffect(() => {
        const fetchAndSetData = async () => {
            try {
                const dataUsers = await getUsers();
                const data = dataUsers.filter((user: IUser) => !user.rol || user.rol.nombre !== 'administrador');
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
            setShowDeleteSuccessAlert(true);
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        } finally {
            setModalOpen(false);
        }
    };

    const handleCloseDeleteSuccessAlert = () => {
        setShowDeleteSuccessAlert(false);
    };

    return (
        <div>
            <h1 className={styles.title}>Gestión de usuarios</h1>
            <CreateButton handleUser={handleCreateUser}/>
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
                        <td className={`${styles.tableTd}`}>{user.rol ? user.rol.nombre : 'Null'}</td>
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
            <CustomAlert
                message="Usuario eliminado con éxito"
                type="success"
                show={showDeleteSuccessAlert}
                onClose={handleCloseDeleteSuccessAlert}
            />
        </div>
    );
}