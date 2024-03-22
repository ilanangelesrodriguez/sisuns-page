import { useState, useEffect } from 'react';
import { useApi } from "../../hooks/UseApi";
import {IUser} from "../../models/IUser";
import {IRol} from "../../models/IRol";

export function UserEditForm() {
    const { data: userData, loading: userLoading, error: userError } = useApi<IUser[]>('https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios');
    const { data: rolesData, loading: rolesLoading, error: rolesError } = useApi<IRol[]>('https://sisuns-server-ilanangelesrodriguez.koyeb.app/roles');

    const [selectedId, setSelectedId] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(1);

    useEffect(() => {
        if (userData && userData.length > 0) {
            setSelectedId(userData[0].id);
        }
    }, [userData]);
    useEffect(() => {
        if (userData) {
            const selectedUser = userData.find((user: IUser) => user.id === selectedId);
            if (selectedUser && selectedUser.rol) {
                setName(selectedUser.nombre);
                setEmail(selectedUser.correo);
                setPassword(selectedUser.contrasena);
                setRole(selectedUser.rol.id);
            }
        }
    }, [userData, selectedId]);

    if (userLoading || rolesLoading) {
        return <div>Cargando...</div>;
    }

    if (userError || rolesError) {
        return <div>Error al cargar los datos.</div>;
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const updatedUser = {
            id: selectedId,
            nombre: name,
            correo: email,
            contrasena: password,
            rol: { id: role }
        };

        try {
            const response = await fetch(`https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios/${selectedId}`, {
                method: 'PUT', // o 'PATCH' si solo estás actualizando ciertos campos
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el usuario');
            }

            const data = await response.json();
            console.log('Usuario actualizado:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <select value={selectedId} onChange={e => setSelectedId(Number(e.target.value))}>
                    {userData && userData.map((user: IUser) => (
                        <option key={user.id} value={user.id}>{user.id}</option>
                    ))}
                </select>
            </label>
            <label>
                Nombre:
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            </label>
            <label>
                Correo:
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </label>
            <label>
                Rol:
                <select value={role} onChange={e => setRole(Number(e.target.value))}>
                    {rolesData && rolesData.map((role: IRol) => (
                        <option key={role.id} value={role.id}>{role.nombre}</option>
                    ))}
                </select>
            </label>
            <input type="submit" value="Actualizar"/>
        </form>
    );
}