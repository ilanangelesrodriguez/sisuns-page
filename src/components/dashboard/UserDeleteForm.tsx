import { useState, useEffect } from 'react';
import {IUser} from "../../models/IUser";

export function UserDeleteForm() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [reload, setReload] = useState(false);

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
    }, [reload]);

    const handleDeleteUser = async (userId: number) => {
        try {
            await fetch(`https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios/${userId}`, {
                method: 'DELETE',
            });
            setReload(!reload); // Cambia el estado de recarga para refrescar los datos
        } catch (error) {
            console.error('Error al eliminar usuario:', error);
        }
    };

    return (
        <div>
            {users && users.map((usuario) => (
                <div key={usuario.id}>
                    <h3>{usuario.nombre}</h3>
                    <p>Correo: {usuario.correo}</p>
                    <p>Rol: {usuario.rol.nombre}</p>
                    <button onClick={() => handleDeleteUser(usuario.id)}>Eliminar Usuario</button>
                </div>
            ))}
        </div>
    );
}