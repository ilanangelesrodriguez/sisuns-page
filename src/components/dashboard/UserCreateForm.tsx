import { useState } from 'react';
import { useApi } from "../../hooks/UseApi";
import {IRol} from "../../models/IRol";

export function UserCreateForm() {
    const { data: rolesData, loading: rolesLoading, error: rolesError } = useApi<IRol[]>('https://sisuns-server-ilanangelesrodriguez.koyeb.app/roles');

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    if (rolesLoading) {
        return <div>Cargando...</div>;
    }

    if (rolesError) {
        return <div>Error al cargar los datos.</div>;
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const newUser = {
            nombre: name,
            correo: email,
            contrasena: password,
            rol: { id: role }
        };

        try {
            const response = await fetch('https://sisuns-server-ilanangelesrodriguez.koyeb.app/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });

            if (!response.ok) {
                throw new Error('Error al crear el usuario');
            }

            const data = await response.json();
            console.log('Usuario creado:', data);

            // Muestra el popup
            setShowPopup(true);

            // Limpia los campos del formulario
            setName('');
            setEmail('');
            setPassword('');
            setRole(1);

        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Crear"/>
            </form>
            {showPopup && (
                <div className="popup">
                    <p>Usuario creado exitosamente</p>
                    <button onClick={() => setShowPopup(false)}>Cerrar</button>
                </div>
            )}
        </div>
    );
}