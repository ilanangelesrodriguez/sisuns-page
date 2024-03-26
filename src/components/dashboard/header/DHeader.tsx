import {useState} from "react";
import {useNavigate} from "react-router-dom";
import styles from './DHeader.module.css';
import {IHeaderProps} from "../../../models/IHeaderProps";
import {Header} from "../../header/Header";
import {useAuth} from "../../../hooks/useAuth";
import {LogoutButton} from "../logoutButton/LogoutButton";
import {OPTIONS} from "./Options";
import {ROLES} from "../../../models/Roles";
import {RUTAS_DASHBOARD} from "../../../models/Rutas";
import {Sidebar} from "primereact/sidebar";
import {PopUpUser} from "../popupUser/PopUpUser";
import {ListBox, ListBoxChangeEvent} from "primereact/listbox";
import { ConfirmModal } from '../confirmModal/ConfirmModal';

interface Option {
    name: string;
    route: string;
    role?: string;
}

export function DHeader({children, darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const [visible, setVisible] = useState<boolean>(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState('');
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const options: Option[] = [
        { name: OPTIONS.CONFIGURACION, route: RUTAS_DASHBOARD.CONFIGURATION },
        { name: OPTIONS.GESTION_USUARIOS, route: RUTAS_DASHBOARD.GESTION_USUARIOS, role: ROLES.ADMINISTRADOR },
        { name: OPTIONS.PREGUNTAS_FRECUENTES, route: RUTAS_DASHBOARD.FREQUENT_QUESTIONS }
    ];
    const filteredOptions = options.filter(
        option => !option.role || user?.rol?.nombre === option.role
    );
    const handleOptionChange = (e: ListBoxChangeEvent) => {
        if (e.value) {
            setSelectedOption(e.value);
            navigate(e.value.route);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleLogoutConfirmation = () => {
        handleLogout();
        setLogoutModalOpen(false);
    };

    return (
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader}>
            <div className="flex justify-content-center">
                <Sidebar className={styles.sidebar} visible={visible} position="right" onHide={() => setVisible(false)}>
                    <div className={styles.sidebarContent}>
                        <div className={styles.sidebarDiv}>
                            <div onClick={() => {
                                setSelectedOption(RUTAS_DASHBOARD.HOME);
                                navigate(RUTAS_DASHBOARD.HOME);
                            }}>
                                <p>{user?.nombre}</p>
                                <p className={styles.sidebarUserEmail}>{user?.correo}</p>
                            </div>
                            <div className="flex justify-content-center">
                                <ListBox value={selectedOption} onChange={handleOptionChange} options={filteredOptions}
                                         optionLabel="name" className={`${styles.sidebarOptions}`}/>
                            </div>
                        </div>
                        <LogoutButton onLogout={() => setLogoutModalOpen(true)}/>
                    </div>

                </Sidebar>
                <PopUpUser onClick={() => setVisible(true)}/>
            </div>
            {children}
            {isLogoutModalOpen && (
                <ConfirmModal
                    message="¿Estás seguro de que quieres cerrar la sesión?"
                    onConfirm={handleLogoutConfirmation}
                    onClose={() => setLogoutModalOpen(false)}
                />
            )}
        </Header>
    )
}