import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from './DHeader.module.css';
import {IHeaderProps} from "../../../models/IHeaderProps";
import {Header} from "../../header/Header";
import {useAuth} from "../../../hooks/useAuth";
import {LogoutButton} from "../logoutButton/LogoutButton";
import {PopUpUser} from "../popupUser/PopUpUser";
import {OPTIONS} from "./Options";
import {ROLES} from "../../../models/Roles";
import {RUTAS_DASHBOARD} from "../../../models/Rutas";

export function DHeader({children, darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const { user } = useAuth();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');

    return (
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader}>
            <div>
                <PopUpUser isDropdownVisible={isDropdownVisible} setDropdownVisible={setDropdownVisible}/>

                {isDropdownVisible && (
                    <div className={`${styles.dropdown} ${isDropdownVisible ? styles.visible : ''}`}>
                        <div className={`${styles.dropdownDiv} ${styles.dropdownUser}`}
                             onClick={() => {
                                 setSelectedOption(RUTAS_DASHBOARD.HOME);
                                 navigate(RUTAS_DASHBOARD.HOME);
                             }}>
                            <p>{user?.nombre}</p>
                            <p className={styles.dropdownUserEmail}>{user?.correo}</p>
                        </div>

                        <ul className={`${styles.dropdownDiv} ${styles.dropdownOptions}`}>
                            <li className={selectedOption === RUTAS_DASHBOARD.CONFIGURATION ? styles.selected : ''}
                                onClick={() => {
                                    setSelectedOption(RUTAS_DASHBOARD.CONFIGURATION);
                                    navigate(RUTAS_DASHBOARD.CONFIGURATION);
                                }}>
                                {OPTIONS.CONFIGURACION}
                            </li>
                            {
                                user?.rol?.nombre === ROLES.ADMINISTRADOR &&
                                <li className={selectedOption === 'gestion-usuarios' ? styles.selected : ''}
                                    onClick={() => {
                                        setSelectedOption('gestion-usuarios');
                                        navigate('gestion-usuarios');
                                    }}>
                                    {OPTIONS.GESTION_USUARIOS}
                                </li>
                            }
                            <li className={selectedOption === 'frequent-questions' ? styles.selected : ''}
                                onClick={() => {
                                    setSelectedOption('frequent-questions');
                                    navigate('frequent-questions');
                                }}>
                                {OPTIONS.PREGUNTAS_FRECUENTES}
                            </li>
                        </ul>
                        <LogoutButton/>
                    </div>
                )}
            </div>
            {children}
        </Header>
    )
}