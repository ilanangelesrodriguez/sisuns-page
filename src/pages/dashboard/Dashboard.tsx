import { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import styles from './Dashboard.module.css';
import {useAuth} from "../../hooks/useAuth";
import {DFooter} from "../../components/dashboard/footer/DFooter";
import {DHeader} from "../../components/dashboard/header/DHeader";
import {IHeaderProps} from "../../models/IHeaderProps";
import {UserEdit} from "../../components/dashboard/userEdit/UserEdit";
import {NotFound} from "../error/NotFound";
import {Main} from "./main/Main";
import {UserTable} from "../../components/dashboard/userTable/UserTable";

export function Dashboard({ darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();

    useEffect(() => {
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'isAuthenticated' && event.newValue === 'false') {
                navigate('/login');
            }
        };
        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate]);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    return (
        <>
            <DHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader} />
            <div className={styles.dashboard}>
                <Routes>
                    <Route path="/" element={<Main user={user} />} />
                    <Route path="/configuration" element={<UserEdit />} />
                    <Route path="/gestion-usuarios" element={<UserTable />} />
                    <Route path="/gestion-usuarios/edit-user/:userId" element={<UserEdit />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <DFooter />
        </>
    )
}