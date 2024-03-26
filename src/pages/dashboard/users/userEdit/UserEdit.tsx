import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useUserUpdate } from '../../../../hooks/useUserUpdate';
import { IUser, IRol } from '../../../../models/interfaces';
import { Loader } from '../../../../components/loader/Loader';
import styles from "./UserEdit.module.css";
import { getUsers, getRoles } from '../../../../services/userService';
import { useAuth } from "../../../../hooks/useAuth";
import { ShowPassword } from "../../../login/showPassword/ShowPassword";
import { ROLES } from "../../../../models/Roles";

export function UserEdit() {
    const userId = Number(useParams().userId);
    const { handleUpdate, loading, error } = useUserUpdate(userId);
    const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);
    const [roles, setRoles] = useState<IRol[]>([]);
    const [showPassword, setShowPassword] = useState(false);
    const { user: authenticatedUser } = useAuth();

    useEffect(() => {
        const fetchUserAndRoles = async () => {
            if (userId) {
                const users = await getUsers();
                const user = users.find((user: IUser) => user.id === Number(userId));
                if (user) {
                    setUpdatedUser({ ...user });
                }
            } else if (authenticatedUser) {
                setUpdatedUser({ ...authenticatedUser });
            }

            const rolesFromDb = await getRoles();
            setRoles(rolesFromDb);
        };
        fetchUserAndRoles();
    }, [userId, authenticatedUser]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (updatedUser) {
            setUpdatedUser({
                ...updatedUser,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (updatedUser) {
            try {
                const updatedUserResponse = await handleUpdate(updatedUser);
                if (updatedUserResponse) {
                    setUpdatedUser(updatedUserResponse);
                }
            } catch (error) {
                console.error('Error al actualizar usuario:', error);
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    if (loading || !updatedUser) {
        return <Loader />;
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}>Editar Usuario</h1>

            <label className={styles.formLabel}>
                Nombre:
                <input type="text" name="nombre" className={styles.formInput} value={updatedUser.nombre} onChange={handleChange}/>
            </label>
            <label className={styles.formLabel}>
                Correo:
                <input type="text" name="correo" className={styles.formInput} value={updatedUser.correo} onChange={handleChange}/>
            </label>
            <label className={styles.formLabel}>
                Contraseña:
                <div className={styles.formLabelPassword}>
                    <input type={showPassword ? "text" : "password"} name="contrasena" className={styles.formInput} value={updatedUser.contrasena} onChange={handleChange}/>

                    <ShowPassword showPassword={showPassword} toggleShowPassword={toggleShowPassword} />
                </div>
            </label>
            {(authenticatedUser?.rol.nombre === ROLES.ADMINISTRADOR && authenticatedUser.id !== updatedUser.id) && (
                <label className={styles.formLabel}>
                    Rol:
                    <select name="rol" className={styles.formInput} value={updatedUser.rol.nombre} onChange={handleChange}>
                        {roles.map((role) => (
                            <option key={role.id} value={role.nombre}>
                                {role.nombre}
                            </option>
                        ))}
                    </select>
                </label>
            )}
            <button className={styles.formButtom} type="submit">Actualizar</button>

            {error && <p className={styles.error}>{error}</p>}

        </form>
    );
}