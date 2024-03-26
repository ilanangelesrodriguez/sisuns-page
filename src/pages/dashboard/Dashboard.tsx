import { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import styles from './Dashboard.module.css';
import {useAuth} from "../../hooks/useAuth";
import {DFooter} from "../../components/dashboard/footer/DFooter";
import {DHeader} from "../../components/dashboard/header/DHeader";
import {IHeaderProps} from "../../models/interfaces";
import {UserEdit} from "./users/userEdit/UserEdit";
import {NotFound} from "../error/NotFound";
import {Main} from "./main/Main";
import {UserTable} from "./users/userTable/UserTable";
import {UserCreate} from "./users/userCreate/UserCreate";
import {RUTAS, RUTAS_DASHBOARD} from "../../models/routes";

export function Dashboard({ darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'isAuthenticated' && event.newValue === 'false') {
                navigate(`/${RUTAS.LOGIN}`);
            }
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(`/${RUTAS.LOGIN}`);
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <DHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader} />
            <div className={styles.dashboard}>
                <Routes>
                    <Route path="/" element={<Main user={user} />} />
                    <Route path={`/${RUTAS_DASHBOARD.CONFIGURATION}`} element={<UserEdit />} />
                    <Route path={`/${RUTAS_DASHBOARD.GESTION_USUARIOS}`} element={<UserTable />} />
                    <Route path={`/${RUTAS_DASHBOARD.GESTION_USUARIOS}/edit-user/:userId`} element={<UserEdit />} />
                    <Route path={`/${RUTAS_DASHBOARD.GESTION_USUARIOS}/create-user`} element={<UserCreate />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <DFooter />
        </>
    )
}