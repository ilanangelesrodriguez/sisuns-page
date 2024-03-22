import React, { useState, useEffect } from 'react';
import {useUserUpdate} from "../../../hooks/useUserUpdate";
import { IUser } from '../../../models/IUser';
import {Loader} from "../../loader/Loader";
import styles from "./UserEdit.module.css";

export function UserEdit() {
    const { user, handleUpdate, loading, error } = useUserUpdate();
    const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (user) {
            setUpdatedUser({...user});
        }
    }, [user]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            const updatedUserResponse = await handleUpdate(updatedUser);
            if (updatedUserResponse) {
                setUpdatedUser(updatedUserResponse);
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    if (loading || !updatedUser) {
        return <Loader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}>Editar Usuario</h1>

            <label className={styles.formLabel}>
                Nombre:
                <input type="text" name="nombre" className={styles.formInput} value={updatedUser.nombre}
                       onChange={handleChange}/>
            </label>
            <label className={styles.formLabel}>
                Correo:
                <input type="text" name="correo" className={styles.formInput} value={updatedUser.correo}
                       onChange={handleChange}/>
            </label>
            <label className={styles.formLabel}>
                Contraseña:
                <div className={styles.formLabelPassword}>
                    <input type={showPassword ? "text" : "password"} name="contrasena" className={styles.formInput}
                           value={updatedUser.contrasena} onChange={handleChange}/>
                    <button className={styles.formLabelPasswordButton} type="button" onClick={toggleShowPassword}>
                        {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                </div>
            </label>
            <button className={styles.formButtom} type="submit">Actualizar</button>
        </form>
    );
}