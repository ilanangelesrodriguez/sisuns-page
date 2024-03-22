import {Header} from "../../header/Header";
import {IHeaderProps} from "../../../models/IHeaderProps";
import {useState} from "react";
import {useAuth} from "../../../hooks/useAuth";
import styles from './DHeader.module.css';
import {LogoutButton} from "../logoutButton/LogoutButton";
import {PopUpUser} from "../popupUser/PopUpUser";
import {OPTIONS} from "./Options";
import {useNavigate} from "react-router-dom";
import {ROLES} from "../../../models/Roles";

export function DHeader({children, darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const { user } = useAuth();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader}>
            <div>
                <PopUpUser isDropdownVisible={isDropdownVisible} setDropdownVisible={setDropdownVisible} />

                {isDropdownVisible && (
                    <div className={`${styles.dropdown} ${isDropdownVisible ? styles.visible : ''}`}>
                        <div className={`${styles.dropdownDiv} ${styles.dropdownUser}`} onClick={() => {navigate('configuration');}}>
                            <p>{user?.nombre}</p>
                            <p className={styles.dropdownUserEmail}>{user?.correo}</p>
                        </div>

                        <ul className={`${styles.dropdownDiv} ${styles.dropdownOptions}`}>
                            <li onClick={() => {navigate('configuration');}}>{OPTIONS.CONFIGURACION}</li>
                            {user?.rol?.nombre === ROLES.ADMINISTRADOR &&
                                <li onClick={() => {navigate('gestion-usuarios');}}>{OPTIONS.GESTION_USUARIOS}</li>}
                            <li onClick={() => {navigate('frequent-questions');}}>{OPTIONS.PREGUNTAS_FRECUENTES}</li>
                        </ul>
                        <LogoutButton/>
                    </div>
                )}
            </div>
            {children}
        </Header>
    )
}