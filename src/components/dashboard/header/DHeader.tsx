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
                    <>
                        <div className={`${styles.dropdown}`}>
                            <p>{user?.nombre}</p>
                            <p>{user?.correo}</p>
                            <ul>
                                <li>Configuración</li>
                                <li>Preguntas frecuentes</li>
                                <button className={`${styles.svgButton} ${styles.signOut}`} onClick={handleLogout}>
                                    <svg className={styles.svgIcon} xmlns="http://www.w3.org/2000/svg" width="200"
                                         height="200" viewBox="0 0 24 24">
                                        <g fill="none">
                                            <path fill="currentColor"
                                                  d="m2 12l-.78-.625l-.5.625l.5.625zm9 1a1 1 0 1 0 0-2zM5.22 6.375l-4 5l1.56 1.25l4-5zm-4 6.25l4 5l1.56-1.25l-4-5zM2 13h9v-2H2z"/>
                                            <path stroke="currentColor" strokeWidth="2"
                                                  d="M10 8.132v-.743c0-1.619 0-2.428.474-2.987c.474-.56 1.272-.693 2.868-.96l1.672-.278c3.243-.54 4.864-.81 5.925.088C22 4.151 22 5.795 22 9.082v5.835c0 3.288 0 4.932-1.06 5.83c-1.062.9-2.683.63-5.926.089l-1.672-.279c-1.596-.266-2.394-.399-2.868-.958C10 19.039 10 18.229 10 16.61v-.545"/>
                                        </g>
                                    </svg>
                                    Cerrar sesión
                                </button>
                            </ul>
                        </div>
                    </>
                )}
            </div>
            {children}
        </Header>
    )
}