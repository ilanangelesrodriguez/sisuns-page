import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IRol, IUser} from "../../../../models/interfaces";
import {createUser, getRoles} from "../../../../services/userService";
import {ShowPassword} from "../../../login/showPassword/ShowPassword";
import styles from "./UserCreate.module.css";
import {CustomAlert} from "../../../../components/dashboard/customAlert/CustomAlert";
import {emptyUser} from "./EmptyUser";
import {RUTAS, RUTAS_DASHBOARD} from "../../../../models/routes";

export function UserCreate() {
    const [newUser, setNewUser] = useState<IUser>(emptyUser);
    const [roles, setRoles] = useState<IRol[]>([]);
    const [showPassword, setShowPassword] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoles = async () => {
            const rolesFromDb = await getRoles();
            setRoles(rolesFromDb);
        };
        fetchRoles();
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        if (event.target.name === 'rol') {
            const selectedRole = roles.find(role => role.nombre === event.target.value);
            setNewUser(prevState => ({
                ...prevState,
                rol: selectedRole || prevState.rol,
            }));
        } else {
            setNewUser(prevState => ({
                ...prevState,
                [event.target.name]: event.target.value,
            }));
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (newUser) {
            try {
                await createUser(newUser);
                setShowSuccessAlert(true);
            } catch (error) {
                console.error('Error al crear usuario:', error);
                setShowErrorAlert(true);
            }
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCloseSuccessAlert = () => {
        setShowSuccessAlert(false);
        navigate(`/${RUTAS.DASHBOARD}/${RUTAS_DASHBOARD.GESTION_USUARIOS}`);
    };

    const handleCloseErrorAlert = () => {
        setShowErrorAlert(false);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.formTitle}>Crear Usuario</h1>

            <label className={styles.formLabel}>
                Nombre:
                <input type="text" name="nombre" className={styles.formInput} value={newUser?.nombre || ''} onChange={handleChange}/>
            </label>
            <label className={styles.formLabel}>
                Correo:
                <input type="text" name="correo" className={styles.formInput} value={newUser?.correo || ''} onChange={handleChange}/>
            </label>
            <label className={styles.formLabel}>
                Contraseña:
                <div className={styles.formLabelPassword}>
                    <input type={showPassword ? "text" : "password"} name="contrasena" className={styles.formInput} value={newUser?.contrasena || ''} onChange={handleChange}/>

                    <ShowPassword showPassword={showPassword} toggleShowPassword={toggleShowPassword} />
                </div>
            </label>
            <label className={styles.formLabel}>
                Rol:
                <select name="rol" className={styles.formInput} value={newUser?.rol.nombre || ''} onChange={handleChange}>
                    {roles.map((role) => (
                        <option key={role.id} value={role.nombre}>
                            {role.nombre}
                        </option>
                    ))}
                </select>
            </label>
            <button className={styles.formButtom} type="submit">Crear</button>

            <CustomAlert
                message="Usuario creado con éxito" type="success"
                show={showSuccessAlert} onClose={handleCloseSuccessAlert}
            />
            <CustomAlert
                message="Error al crear usuario" type="error"
                show={showErrorAlert} onClose={handleCloseErrorAlert}
            />
        </form>
    );
}