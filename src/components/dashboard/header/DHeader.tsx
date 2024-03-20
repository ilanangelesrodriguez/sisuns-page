import {Header} from "../../header/Header";
import {IHeaderProps} from "../../../models/IHeaderProps";
import {useState} from "react";
import {useAuth} from "../../../hooks/useAuth";
import styles from './DHeader.module.css';
import {useNavigate} from "react-router-dom";

export function DHeader({children, darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const { user, logout } = useAuth();
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader}>
            <div onClick={toggleDropdown}>
                <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="200" height="200"
                     viewBox="0 0 14 14">
                    <g fill="none" stroke="currentColor">
                        <path d="M7 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-4.27 3.9a5 5 0 0 1 8.54 0"/>
                        <path d="M7 13.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"/>
                    </g>
                </svg>
                {isDropdownVisible && (
                    <div className={`${styles.dropdown} ${isDropdownVisible ? styles.visible : ''}`}>
                        <p>{user?.nombre}</p>
                        <p>{user?.correo}</p>
                        <ul>
                            <li>Configuración</li>
                            <li>Preguntas frecuentes</li>
                            <button onClick={handleLogout}>Cerrar sesión</button>
                        </ul>
                    </div>
                )}
            </div>
            {children}
        </Header>
    )
}