import {Header} from "../../header/Header";
import {IHeaderProps} from "../../../models/IHeaderProps";
import {useState} from "react";
import {useAuth} from "../../../hooks/useAuth";
import styles from './DHeader.module.css';
import {LogoutButton} from "../logoutButton/LogoutButton";
import {PopUpUser} from "../popupUser/PopUpUser";
import {OPTIONS} from "./Options";

export function DHeader({children, darkMode, toggleDarkMode, showFullHeader, setSelectedOption}: IHeaderProps & {setSelectedOption: (option: string | null) => void}) {
    const { user } = useAuth();
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    return (
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader}>
            <div>
                <PopUpUser isDropdownVisible={isDropdownVisible} setDropdownVisible={setDropdownVisible} />

                {isDropdownVisible && (
                    <div className={`${styles.dropdown} ${isDropdownVisible ? styles.visible : ''}`}>
                        <div className={`${styles.dropdownDiv} ${styles.dropdownUser}`} onClick={() => setSelectedOption(OPTIONS.CONFIGURACION)}>
                            <p>{user?.nombre}</p>
                            <p className={styles.dropdownUserEmail}>{user?.correo}</p>
                        </div>

                        <ul className={`${styles.dropdownDiv} ${styles.dropdownOptions}`}>
                            <li onClick={() => setSelectedOption(OPTIONS.CONFIGURACION)}>{OPTIONS.CONFIGURACION}</li>
                            {user?.rol?.nombre === 'administrador' &&
                                <li onClick={() => setSelectedOption(OPTIONS.GESTION_USUARIOS)}>{OPTIONS.GESTION_USUARIOS}</li>}
                            <li onClick={() => setSelectedOption(OPTIONS.PREGUNTAS_FRECUENTES)}>{OPTIONS.PREGUNTAS_FRECUENTES}</li>
                        </ul>
                        <LogoutButton/>
                    </div>
                )}
            </div>
            {children}
        </Header>
    )
}