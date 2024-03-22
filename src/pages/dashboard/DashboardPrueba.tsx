import { useEffect, useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import styles from './Dashboard.module.css';
import {useAuth} from "../../hooks/useAuth";
import {DFooter} from "../../components/dashboard/footer/DFooter";
import {DHeader} from "../../components/dashboard/header/DHeader";
import {IHeaderProps} from "../../models/IHeaderProps";
import {UserTable} from "../../components/dashboard/userTable/UserTable";
import {UserEdit} from "../../components/dashboard/userEdit/UserEdit";
import {NotFound} from "../error/NotFound";
import {OPTIONS} from "../../components/dashboard/header/Options";

export function Dashboard({ darkMode, toggleDarkMode, showFullHeader}: IHeaderProps) {
    const navigate = useNavigate();
    const { isAuthenticated } = useAuth();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

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
            <DHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} showFullHeader={showFullHeader} setSelectedOption={setSelectedOption} />
            <div className={styles.dashboard}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <main className={styles.dashboardMain}>
                                <h1>Dashboard</h1>
                                {selectedOption === OPTIONS.GESTION_USUARIOS && <UserTable />}
                            </main>
                        </>
                    }/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <DFooter />
        </>
    )
}